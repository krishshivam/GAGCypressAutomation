describe('OTP Verification Test', () => {
    it('Fetch OTP from database and enter it', () => {
      const phoneNumber = '555555555'; 
  
      cy.task(
        'queryDb',
        `SELECT otp FROM ktpl_loginviasms_transaction WHERE mobile_number = '${phoneNumber}' ORDER BY created_at DESC LIMIT 1`
      ).then((result) => {
        const otp = result[0].otp;
        cy.log('OTP:', otp);
  
        cy.visit('https://preprod.grandiose.ae/customer/account/login');
        cy.get('#mobilenumber').type(phoneNumber);
        cy.get('#send-via-sms').click();
        cy.get('.otp-fields').type(otp);
        });
    });
  });
  