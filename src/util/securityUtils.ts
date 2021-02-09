export const securityDisplayname = (name: String) => {
    return name.replace(' Common Stock', '')
      .replace('American depositary shares each representing one Class A ordinary share','')
      .replace('American Depositary Shares', '')
      .replace('each representing eight Ordinary share', '')
      .replace('each representing one unit', '')
      .replace('Class A Ordinary Shares', '')
      .replace('Class A Common Shares','')
      .replace('Common Shares','')      
      .replace('Class A','')
      .replace('Subordinate Voting Shares','')
      .replace('','')
}