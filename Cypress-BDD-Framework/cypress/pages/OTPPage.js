class OTPPage{
    elements ={
        otpField: () =>cy.get('#secret'),
        loginBtn: () => cy.get("#submitButton")
    }
 typeOTP(otp){
     this.elements.otpField().type(otp);
 }
 clickOnLogin(){
     this.elements.loginBtn().click();
 }
 enterOTP(otp){
        this.typeOTP(otp);
        this.clickOnLogin();
 }
}
export default OTPPage;