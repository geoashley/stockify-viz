export const securityDisplayname = (name: String) => {
    return name.replace(' Common Stock', '')
      .replace('American Depositary Shares', '')
      .replace('each representing eight Ordinary share', '')
      .replace('each representing one unit', '')
      .replace('Class A Ordinary Shares', '')
  }