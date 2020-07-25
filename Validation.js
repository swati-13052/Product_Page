const VALIDATE_FORM = (function () {
    const validateForm = (form) => {
        let isValidated = true;
        Object.keys(form).forEach(formKey => {
            switch (formKey) {
                case "email":
                    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!form[formKey] || !re.test(String(form[formKey]).toLowerCase())) {
                        isValidated = false;
                    }
                    break;
                case "phone":
                    if (isNaN(form[formKey]) || form[formKey].length < 10) {
                        isValidated = false;
                    }
                    break;
                case "name":
                case "username":
                case "street":
                case "suite":
                case "website":
                    if (!form[formKey]) {
                        isValidated = false;
                    }
                    break;
                default:
                    break;
            }
        });
        return isValidated;
    };

    return {
        validateForm: validateForm
    }
})();
