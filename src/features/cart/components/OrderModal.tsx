import { FC, Fragment } from "react";
import { Space, Modal, Card, Divider, Table, Image, Typography } from "@/components/UI";
import type { ModalProps } from "@/components/UI/Modal";
import type { Lang } from "@/common/type";
import type { Columns } from "@/components/UI/Table/type";
import type { Order, OrderItem } from "@/services/order/type";
import type { Product } from "@/services/product/type";
import { ELang } from "@/common/enum";
import { useDisplayPaymentMethod, useDisplayRecievedType } from "@/hooks";
import Link from "next/link";
import useSumPrice from "../hooks/useSumPrice";
import useSumQuantity from "../hooks/useSumQuanity";
import ShipmentInfo from "./ShipmentInfo";
import PaymentInfo from "./PaymentInfo";
import utils from "@/utils";
import url from "@/common/constant/url";

const { PRODUCT_DETAIL } = url;

const { Paragraph } = Typography;

interface OrderModalProps extends ModalProps {
  locale: ELang;
  lang: Lang;
  order: Order;
}

const OrderModal: FC<OrderModalProps> = ({ locale, lang, order, onCancel, ...restProps }) => {
  const totalPrice = useSumPrice({ type: "order", data: order });

  const totalQuatity = useSumQuantity({ type: "order", data: order });

  const hasShipmentFee = totalPrice < 100000 && order.shipment !== undefined;

  const shipmentFee = hasShipmentFee ? 50000 : 0;

  const totalPayment = totalPrice + shipmentFee + (totalPrice * 10) / 100;

  const dataSource = (): OrderItem[] => order?.items?.map((item) => ({ ...item })) || [];

  const columns: Columns<OrderItem> = [
    {
      id: "image",
      title: lang.common.table.head.image,
      dataIndex: "product",
      render: () => <Image imgWidth={50} imgHeight={50} />,
    },
    {
      id: "name",
      title: lang.common.table.head.productName,
      dataIndex: "product",
      render: (product: Product) => (
        <Link
          className="order-modal-product-link"
          href={{ pathname: PRODUCT_DETAIL, query: { id: product.id, langCode: locale } }}
        >
          {product.name}
        </Link>
      ),
    },
    {
      id: "quantity",
      title: lang.common.table.head.quantity,
      dataIndex: "quantity",
    },
    {
      id: "price",
      title: lang.common.table.head.price,
      dataIndex: "product",
      render: (product: Product) => <>{utils.formatPrice(locale, product.totalPrice)}</>,
    },
  ];

  return (
    <Modal
      color="green"
      hasCancelButton={false}
      head={<Paragraph size={16}>{lang.cart.purchased.title}</Paragraph>}
      onOk={onCancel}
      {...restProps}
    >
      <Table<OrderItem> color="green" dataSource={dataSource()} columns={columns} />
      <Divider />
      <Card>
        <Space align="middle">
          <Paragraph weight={600}>{lang.cart.methods.title}</Paragraph>
          <Fragment>{useDisplayPaymentMethod(order.paymentMethod)}</Fragment>
        </Space>
      </Card>
      <Divider />
      <Card>
        <Space align="middle">
          <Paragraph weight={600}>{lang.cart.received.title}</Paragraph>
          <Fragment>{useDisplayRecievedType(order.recievedType)}</Fragment>
        </Space>
        <ShipmentInfo lang={lang} hasEdit={false} shipment={order.shipment} />
      </Card>
      <Divider />
      {order.note && (
        <Card>
          <Space>
            <Paragraph weight={600}>{lang.common.form.label.note}</Paragraph>
            <Paragraph>{order.note}</Paragraph>
          </Space>
        </Card>
      )}
      <Divider />
      <PaymentInfo
        hasHead={false}
        locale={locale}
        lang={lang}
        totalPrice={totalPrice}
        totalQuatity={totalQuatity}
        totalPayment={totalPayment}
        shipmentFee={shipmentFee}
      />
    </Modal>
  );
};

export default OrderModal;
