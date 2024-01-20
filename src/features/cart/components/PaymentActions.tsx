import { FC } from "react";
import { Button, Grid } from "@/components/UI";
import type { Lang } from "@/common/type";

const { Row, Col } = Grid;

interface PaymentActionsProps {
  lang: Lang;
  handleUnConfirm: () => void;
  handleOrder: () => void;
}

const PaymentActions: FC<PaymentActionsProps> = ({ lang, handleUnConfirm, handleOrder }) => {
  return (
    <div className="payment-actions">
      <Row justify="between">
        <Col xs={8} md={6} lg={8} span={6}>
          <Button sizes="lg" color="green" ghost rootClassName="actions-btn" onClick={handleUnConfirm}>
            {lang.cart.actions.return}
          </Button>
        </Col>
        <Col xs={16} md={18} lg={16} span={18} onClick={handleOrder}>
          <Button sizes="lg" color="green" rootClassName="actions-btn">
            {lang.cart.actions.purchase}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentActions;
