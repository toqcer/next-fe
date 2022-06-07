const numberFormatter = (num) => {
  // 1000 -> 1k etc
  if (num / 1e6 >= 1) return `${(num / 1e6).toFixed(1)}M`.replace(".", ",");
  if (num / 1e3 >= 1) return `${(num / 1e3).toFixed(1)}K`.replace(".", ",");
  return num;
};

const numberFormatToIdr = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(number);
};

const numberWithDot = (num) => {
  let res = "";
  let str = String(num);
  let len = str.length;

  if (len <= 3) return str;

  for (let i = 1; i <= len; i++) {
    if (i % 3 === 0 && len - i !== 0) {
      res = `.${str[len - i].concat(res)}`;
      continue;
    }
    res = str[len - i].concat(res);
  }
  return res;
};

export { numberFormatter, numberWithDot, numberFormatToIdr };
