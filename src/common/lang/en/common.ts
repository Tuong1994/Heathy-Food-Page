const common_en = {
  company: "HEATHY FOOD Co., Ltd",
  menu: {
    home: "Home",
    mart: "Mart",
    cart: "Cart",
    favorite: "Favorite",
    account: "Account",
    about: "About Healthy Food",
    payment: "Payment Methods",
    delivery: "Delivery Policy",
    exchange: "Exchange & Return Policy",
  },
  form: {
    label: {
      account: "Account",
      password: "Password",
      oldPassword: "Old password",
      newPassword: "New password",
      confirmPassword: "Confirm password",
      firstName: "First name",
      lastName: "Last name",
      fullName: "Full name",
      phone: "Phone",
      email: "Email",
      gender: "Gender",
      birthday: "Birthday",
      fullAddress: "Address",
      address_en: "Address (EN)",
      address_vn: "Address (VN)",
      city: "City/Province",
      district: "District",
      ward: "Ward",
      note: "Note",
      unit: "Unit",
      status: "Status",
      origin: "Origin",
      inventory: "Inventory",
      inventoryStatus: "Inventory status",
      supplier: "Supplier",
      optional: "Optional",
    },
    placeholder: {
      enter: "Enter infomation",
      select: "Select",
      search: "Search",
      imagesUpload: "Select or drag image here",
      filesUpload: "Choose file",
    },
    rule: {
      required: "This field is required",
      phone: "Phone invalid",
      email: "Email invalid",
      confirmPassword: "The passwords do not match",
      whiteSpace: "White space are not allowed",
      min: "{{min}} is minimum",
      max: "{{max}} is maximum",
      minLength: "Must have at least {{min}} character",
      maxLength: "Maximum length {{max}} characters",
    },
    others: {
      emptyOptions: "No options",
      optional: "Optional",
      fileSize: "File size must not greater than {{num}}MB",
      fileType: "Only accept file type {{type}}",
      fileMax: "Can only upload {{num}} image per time",
    },
  },
  unit: {
    quanity: "qty",
  },
  status: {
    inStock: "In stock",
    outOfStock: "Out of stock",
    new: "New",
  },
  actions: {
    ok: "Ok",
    send: "Send",
    save: "Save",
    edit: "Edit",
    update: "Update",
    remove: "Remove",
    filter: "Filter",
    cancel: "Cancel",
  },
  table: {
    head: {
      customerName: "Full name",
      phone: "Phone",
      email: "Email",
      gender: "Gender",
      birthday: "Birthday",
      address: "Address",
      image: "Image",
      productName: "Name",
      quantity: "Quantity",
      price: "Price",
      orderNumber: "Order number",
      status: "Status",
      paymentStatus: "Payment status",
      paymentMethod: "Payment method",
      recievedType: "Recieved method",
      comment: "Comment",
      rate: "Rate",
      createdAt: "Created date",
      updatedAt: "Updated date",
    },
  },
  description: {
    noData:
      "Something went wrong. Look like there are trouble for getting data. Please try again or contact to our support team",
    empty: "No data",
  },
  message: {
    success: {
      signIn: "Sign in success",
      signUp: "Sign up success",
      logout: "Logouted",
      addItemCart: "Product is added to cart",
      updateCart: "Cart has been updated",
      rate: "Thank you for your rating",
      addComment: "Thank you for your comment",
      updateComment: "Comment has been updated",
      removeComment: "Comment has been removed",
      updateUser: "Updated success",
      changePassword: "Password has been changed",
      resetPassword: "Password has been reset",
      addLike: "Added to favorites list",
      removeLike: "Removed from favorites list",
    },
    error: {
      authEmail: "Email is not correct. Please try again",
      authPassword: "Password is not correct. Please try again",
      emailExist: "Email is already exist",
      logout: "Logout failed",
      remove: "Remove failed",
      payment: "Payment failed",
      api: "Api network failed",
    },
  },
};

export default common_en;
