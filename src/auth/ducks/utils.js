export const getCookie = (name) => {
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[]\/+^])/g, '\\$1')}=([^;]*)`));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (name, value, options) => {
  const opt = options || {};

  let { expires } = { ...opt };

  expires = expires || 86000;

  if (typeof expires === 'number' && expires) {
    const d = new Date();
    d.setTime(d.getTime() + (expires * 1000));
    expires = d;
    opt.expires = d;
  }
  if (expires && expires.toUTCString) {
    opt.expires = expires.toUTCString();
  }

  const val = encodeURIComponent(value);

  let updatedCookie = `${name}=${val}`;
  for (let propName in opt) {
    if (opt.hasOwnProperty(propName)) {
      updatedCookie += `; ${propName}`;
      const propValue = opt[propName];
      if (propValue !== true) {
        updatedCookie += `= ${propValue}`;
      }
    }
  }
  document.cookie = updatedCookie;
};

export function deleteCookie(name) {
  setCookie(name, '', {
    expires: -1,
  });
}
