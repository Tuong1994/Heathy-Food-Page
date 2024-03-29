import { useEffect, useState } from "react";
import { getCart } from "@/services/cart/api";
import { CartWithItemsPaging } from "@/services/cart/type";
import { ApiQuery, ApiResponse, ResponseError } from "@/services/type";
import { useLang } from "@/hooks";
import { useRouter } from "next/router";
import { cartSwrKey } from "../swrkey";
import useSWR, { SWRConfiguration } from "swr";
import useAuthStore from "@/store/AuthStore";
import useCartStore from "@/store/CartStore";

const useGetCart = () => {
  const { locale } = useLang();

  const { query } = useRouter();

  const auth = useAuthStore((state) => state.auth);

  const setCart = useCartStore((state) => state.setCart);

  const [error, setError] = useState<boolean>(false);

  const getCartByUser = async () => {
    const { page, limit } = query;
    const apiQuery: ApiQuery = {
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 10,
      userId: auth.info.id,
      langCode: locale,
    };
    if (error) setError(false);
    const response = await getCart(apiQuery);
    if (!response.success) setError(true);
    return response;
  };

  const config: SWRConfiguration = {
    refreshInterval: 0,
    revalidateOnFocus: false,
  };

  const { data: cartByUserData, isValidating: loading } = useSWR<
    ApiResponse<CartWithItemsPaging>,
    ResponseError
  >(auth.isAuth ? cartSwrKey(auth.info?.id, query.page, query.limit, locale) : null, getCartByUser, config);

  useEffect(() => {
    setCart({
      loading,
      error,
      data: cartByUserData?.data,
    });
  }, [loading, error, cartByUserData]);
};

export default useGetCart;
