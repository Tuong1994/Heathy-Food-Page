const common_vn = {
  company: "Công ty TNHH HEATHY FOOD",
  menu: {
    home: "Trang chủ",
    mart: "Siêu thị",
    cart: "Giỏ hàng",
    favorite: "Yêu thích",
    account: "Tài khoản",
    about: "Về Healthy Food",
    payment: "Phương thức thanh toán",
    delivery: "Chính sách giao hàng",
    exchange: "Chính sách đổi trả",
  },
  form: {
    label: {
      account: "Tài khoản",
      password: "Mật khẩu",
      oldPassword: "Mật khẩu cũ",
      newPassword: "Mật khẩu mới",
      firstName: "Tên",
      lastName: "Họ",
      fullName: "Họ và Tên",
      phone: "Điện thoại",
      email: "Email",
      gender: "Giới tính",
      birthday: "Ngày sinh",
      fullAddress: "Địa chỉ",
      address_en: "Địa chỉ (EN)",
      address_vn: "Địa chỉ (VN)",
      city: "Thành phố/Tỉnh",
      district: "Quận/Huyện",
      ward: "Phường/Xã",
      note: "Ghi chú",
      unit: "Đơn vị",
      status: "Trạng thái",
      origin: "Xuất xứ",
      inventory: "Hàng tồn kho",
      inventoryStatus: "Tình trạng tồn kho",
      supplier: "Nhà cung cấp",
      optional: "Không bắt buộc",
    },
    placeholder: {
      type: "Nhập",
      select: "Chọn",
      search: "Tìm kiếm",
    },
    rule: {
      required: "Trường này là bắt buộc",
      phone: "Điện thoại không hợp lệ",
      email: "Email không hợp lệ",
      whiteSpace: "Không được có khoảng trắng",
      min: "{{min}} là tối thiểu",
      max: "{{max}} là tối đa",
      minLength: "Phải có ít nhất {{min}} ký tự",
      maxLength: "Độ dài tối đa là {{max}} ký tự",
    },
  },
  unit: {
    quanity: "sl",
  },
  status: {
    inStock: "Còn hàng",
    outOfStock: "Hết hàng",
    new: "Mới",
  },
  actions: {
    ok: "Ok",
    save: "Lưu",
    edit: "Chỉnh sửa",
    update: "Cập nhật",
    cancel: "Hủy",
  },
  table: {
    head: {
      customerName: "Họ và Tên",
      phone: "Điện thoại",
      email: "Email",
      gender: "Giới tính",
      birthday: "Ngày sinh",
      address: "Địa chỉ",
      image: "Hình ảnh",
      productName: "Tên sản phẩm",
      quantity: "Số lượng",
      price: "Đơn giá",
      orderNumber: "Số đơn hàng",
      status: "Trạng thái",
      paymentStatus: "Tình trạng thanh toán",
      paymentMethod: "Phương thức thanh toán",
      recievedType: "Phương thức nhận hàng",
      comment: "Bình luận",
      rate: "Đánh giá",
      createdAt: "Ngày tạo",
      updatedAt: "Ngày cập nhật",
    },
  },
  description: {
    noData:
      "Đã xảy ra lỗi. Có vẻ như đang gặp khó khăn khi lấy dữ liệu. Vui lòng thử lại hoặc liên hệ với nhóm hỗ trợ của chúng tôi",
    empty: "Không có dữ liệu",
  },
  message: {
    success: {
      signIn: "Đăng nhập thành công",
      signUp: "Đăng ký thành công",
      logout: "Đã đăng xuất",
      addItemCart: "Sản phẩm đã được thêm vào giỏ hàng",
      updateCart: "Giỏ hàng đã được cập nhật",
      rate: "Cảm ơn vì sự đánh giá của bạn",
      addComment: "Cảm ơn bạn đã bình luận",
      updateComment: "Bình luận đã được cập nhật",
      removeComment: "Bình luận đã được xóa",
    },
    error: {
      authEmail: "Email không đúng. Vui lòng thử lại",
      authPassword: "Mật khẩu không đúng. Vui lòng thử lại",
      emailExist: "Email này đã tồn tại",
      logout: "Lỗi đăng xuất",
      remove: "Lỗi không thể xóa",
      payment: "Lỗi không thể thanh toán",
      api: "Đã xảy ra lỗi",
    },
  },
};

export default common_vn;
