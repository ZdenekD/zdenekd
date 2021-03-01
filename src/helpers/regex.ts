interface IRegex {
    name: RegExp
    text: RegExp
    phone: RegExp
    email: RegExp
    zip: RegExp
}

const regex: IRegex = {
    name: /^[éěëščřžýáäíïťďňöúůüÿÉĚËŠČŘŽÝÁÄÍÏŤĎŇÖÚŮÜŸ\-\w\s\d]+$/,
    text: /^[éěëščřžýáäíïťďňöúůüÿÉĚËŠČŘŽÝÁÄÍÏŤĎŇÖÚŮÜŸ\-,.?!'"\w\s\d]+$/,
    phone: /^((\+)42[01])?([1-9][0-9]{8})$/,
    email: /^("([ !#-[\]-~]|\\[ -~])+"|[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*)@([0-9a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,61}[0-9a-z\u00C0-\u02FF\u0370-\u1EFF])?\.)+[a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,17}[a-z\u00C0-\u02FF\u0370-\u1EFF])?$/i,
    zip: /^\d{3}(\s)?\d{2}$/,
};

export default regex;
