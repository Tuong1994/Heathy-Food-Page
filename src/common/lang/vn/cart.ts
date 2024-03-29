const cart_vn = {
  confirm: "Xác nhận đơn hàng",
  finish: "Thanh toán và mua hàng",
  actions: {
    payment: "Thanh toán",
    return: "Quay lại",
    purchase: "Mua hàng",
  },
  methods: {
    title: "Hình thức thanh toán",
    note: "Vui lòng chọn phương thức thanh toán trước khi đặt hàng",
    transfer: {
      title: "Chuyển khoản",
      content:
        "Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Đơn hàng sẽ đươc giao sau khi tiền đã chuyển",
      holders: "Chủ tài khoản",
      branch: "Chi nhánh",
      number: "Số tài khoản",
      bank: "Ngân hàng",
    },
    cod: {
      title: "COD",
      content: "'Cho đơn đạt giá trị tối thiểu",
    },
    cash: {
      title: "Tiền mặt",
      content:
        "Thanh toán 100% trực tiếp tại cửa hàng hoặc đặt cọc trước 40% giá trị đơn hàng. Sau khi nhận hàng thanh toán số tiền còn lại",
    },
  },
  received: {
    title: "Nhận hàng",
    store: "Nhận hàng tại cửa hàng",
    delivery: "Giao nhận",
  },
  info: {
    title: "Thông tin chung",
    product: "Tổng số sản phẩm",
    totalPrice: "Tổng giá sản phẩm",
    totalPricePreTax: "Tổng tiền trước thuế",
    deliveryFee: "Phí vận chuyển",
    tax: "VAT (10%)",
    totalPayment: "Tổng tiền thanh toán",
  },
  shipment: {
    title: "Thông tin vận chuyển",
    editLabel: "Chỉnh sửa",
    removeLabel: "Xóa",
  },
  purchased: {
    title: "Mua hàng thành công",
    message:
      "Cảm ơn bạn đã mua sản phẩm của chúng tôi. Vui lòng kiểm tra email của bạn để biết thông tin đặt hàng",
  },
  empty: {
    note: "Bạn không có sản phẩm nào trong giỏ hàng",
    action: "Trở về trang chủ",
  },
  removeModal: {
    description: "Bạn có muốn xóa {{num}} dòng đã chọn không ?",
  },
};

export default cart_vn;
