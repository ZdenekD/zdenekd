interface IRegex {
    name: RegExp
    text: RegExp
    number: RegExp
    phone: RegExp
    email: RegExp
    zip: RegExp
    year: RegExp
}

const regex: IRegex = {
    name: /^[éěëščřžýáäíïťďňöúůüÿÉĚËŠČŘŽÝÁÄÍÏŤĎŇÖÚŮÜŸ\-\w\s\d]+$/,
    text: /^[éěëščřžýáäíïťďňöúůüÿÉĚËŠČŘŽÝÁÄÍÏŤĎŇÖÚŮÜŸ\-,.?!'"\w\s\d]+$/,
    number: /^\d+$/,
    phone: /^((\+)?42[01]\s?)?([1-9]{1}[0-9]{2}(\s?[0-9]{3}){2})$/,
    email: /^("([ !#-[\]-~]|\\[ -~])+"|[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*)@([0-9a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,61}[0-9a-z\u00C0-\u02FF\u0370-\u1EFF])?\.)+[a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,17}[a-z\u00C0-\u02FF\u0370-\u1EFF])?$/i,
    zip: /^\d{3}(\s)?\d{2}$/,
    year: /^(19|20)[0-9]{2}$/,
};

export default regex;
