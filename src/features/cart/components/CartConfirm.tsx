import { FC } from "react";
import { Table, Image, Pagination, Divider, Space, Button, Typography } from "@/components/UI";
import { HiTrash } from "react-icons/hi2";
import { useLang } from "@/hooks";
import type { Columns } from "@/components/UI/Table/type";
import QuantityControl from "@/components/Page/QuantityControl";
import utils from "@/utils";

const { Title } = Typography;

interface Data {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface CartConfirmProps {
  handleConfirm: () => void;
}

const CartConfirm: FC<CartConfirmProps> = ({ handleConfirm }) => {
  const { locale, lang } = useLang();

  const dataSource: Data[] = [
    { id: "1", name: "Product 1", quantity: 1, price: 100000 },
    { id: "2", name: "Product 2", quantity: 5, price: 200000 },
    { id: "3", name: "Product 3", quantity: 3, price: 500000 },
  ];

  const columns: Columns<Data> = [
    {
      id: "image",
      title: lang.common.table.head.image,
      dataIndex: "id",
      render: () => <Image imgWidth={50} imgHeight={50} />,
    },
    {
      id: "name",
      title: lang.common.table.head.productName,
      dataIndex: "name",
    },
    {
      id: "quantity",
      title: lang.common.table.head.quantity,
      dataIndex: "quantity",
      render: (data: number) => <QuantityControl defaultValue={data} min={1} productId="" />,
    },
    {
      id: "price",
      title: lang.common.table.head.price,
      dataIndex: "price",
      render: (data: number) => <>{utils.formatPrice(locale, data)}</>,
    },
    {
      id: "action",
      title: "",
      dataIndex: "id",
      render: () => (
        <button className="confirm-delete-btn">
          <HiTrash size={20} />
        </button>
      ),
    },
  ];

  return (
    <div className="cart-confirm">
      <Title level={6}>{lang.cart.confirm}</Title>

      <Table<Data> color="green" dataSource={dataSource} columns={columns} />

      <Pagination color="green" shape="square" ghost rootClassName="confirm-pagination" />

      <Divider />

      <Space justify="end">
        <Button sizes="lg" color="black" ghost>
          {lang.common.actions.update}
        </Button>
        <Button sizes="lg" color="green" onClick={handleConfirm}>
          {lang.cart.actions.payment}
        </Button>
      </Space>
    </div>
  );
};

export default CartConfirm;
