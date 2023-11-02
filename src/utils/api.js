import axios from "axios";

export const BASEURL = 'https://api.ebhuktan.com';
// export const BASEURL = 'http://65.2.143.179:3000';

const apiBaseUrl = `${BASEURL}/api/`;
export const SaveBillOption = ['Home', 'Mom', 'Office', 'Other']
export const SaveBillOption1 = ['Withdrawal', 'Deposit']
export const transactionByType = ['All', 'Sent', 'Received']



const APIUser = `${apiBaseUrl}user/`
const APISuperadmin = `${apiBaseUrl}superAdmin/`

export const ApiUrl = {
  signup: `${APIUser}signup`,
  accountVerification: `${APIUser}accountVerification`,
  login: `${APIUser}login`,
  update: `${APIUser}update`,
  removeProfile: `${APIUser}removeProfile`,
  forgotPassword: `${APIUser}forgotPassword`,
  // forgotPassword: `${APISuperadmin}forgotPassword`,
  resetPassword: `${APIUser}resetPassword`,
  changePassword: `${APIUser}changePassword`,
  resendOTP: `${APIUser}resendOTP`,
  // resetPassword: `${APISuperadmin}resetPassword`,
  changePassword: `${APIUser}changePassword`,
  getByToken: `${APIUser}getByToken`,
  generatePdf: `${APIUser}generatePdf`,
  addAmount: `${APIUser}addAmount`,
  walletTransfer: `${APIUser}walletTransfer`,
  generateQRCode: `${APIUser}UPI/generateQRCode`,
  aadhaarWithOTP: `${APIUser}verification/aadhaarWithOTP`,
  verifyAadhaarOTP: `${APIUser}verification/verifyAadhaarOTP`,
  mobileSendOTP: `${APIUser}sendOTP`,
  contactVerification: `${APIUser}contactVerification`,
  userCreate: `${APIUser}userCreate`,
  requestRise: `${APIUser}payment/request/rise`,
  requestGetAll: `${APIUser}payment/request/getAll`,



  // transaction api
  getAllTransaction: `${apiBaseUrl}transaction/getAllTransaction`,
  getAllType: `${apiBaseUrl}transaction/getType`,
  commissionGetAll: `${apiBaseUrl}transaction/commission/getAll`,
  walletTransferGetAll: `${apiBaseUrl}transaction/wallet/get/transaction`,
  walletTransactionByType: `${apiBaseUrl}transaction/wallet/transactionByType`,

  // mobile recharge api
  rechargeGetOperatorList: `${apiBaseUrl}recharge/getOperatorList`,
  rechargeGetCircle: `${apiBaseUrl}recharge/getCircle`,
  recharGetPlan: `${apiBaseUrl}recharge/getPlan`,
  recharDoRecharge: `${apiBaseUrl}recharge/doRecharge`,
  rechargeCheckHLR: `${apiBaseUrl}recharge/checkHLR`,

  // postPaid recharge api
  recharPostpaidGetOperatorList: `${apiBaseUrl}recharge/postpaid/getOperatorList`,
  recharPostpaidfetchBill: `${apiBaseUrl}recharge/postpaid/fetchBill`,
  recharPostpaidpayBill: `${apiBaseUrl}recharge/postpaid/payBill`,

  // Landline bill details api
  landlineGetOperatorList: `${apiBaseUrl}broadband/bill-payment/landline/getOperatorList`,
  landlineGetFetchBill: `${apiBaseUrl}broadband/bill-payment/landline/fetchBill`,
  landlinePayBill: `${apiBaseUrl}broadband/bill-payment/landline/payBill`,

  // loan emi payment api
  loanEmiPaymentGetOperatorList: `${apiBaseUrl}loan/EMI/payment/getOperatorList`,
  loanPaymentfetchLoanEMI: `${apiBaseUrl}loan/EMI/payment/fetchLoanEMI`,
  loanPaymentPayLoanEMI: `${apiBaseUrl}loan/EMI/payment/payLoanEMI`,

  // Insurance EMI payment api
  insuranceEMIgetOperatorList: `${apiBaseUrl}insurance/EMI/payment/getOperatorList`,
  emiFetchInsuranceDetails: `${apiBaseUrl}insurance/EMI/payment/fetchInsuranceDetails`,
  emiPayInsurance: `${apiBaseUrl}insurance/EMI/payment/payInsurance`,


  // user getBy Token api
  userGetByToken: `${apiBaseUrl}user/getByToken`,

  fastTag: `${apiBaseUrl}fastTag/`,
  fastTagGetOperatorList: `${apiBaseUrl}fastTag/getOperatorList`,
  fastTagFetchDetails: `${apiBaseUrl}fastTag/fetchDetails`,
  fastTagDoRecharge: `${apiBaseUrl}fastTag/doRecharge`,

  // electricityGetOperatorList: `${apiBaseUrl}electricity/bill-payment/getOperaterList`,
  // electricityGetState: `${apiBaseUrl}electricity/bill-payment/getState`,
  // electricityFetchBill: `${apiBaseUrl}electricity/bill-payment/fetchBill`,

  electricity: `${apiBaseUrl}electricity/bill-payment/`,
  electricityGetOperatorList: `${apiBaseUrl}electricity/bill-payment/getOperaterList`,
  electricityGetState: `${apiBaseUrl}electricity/bill-payment/getState`,
  electricityFetchBill: `${apiBaseUrl}electricity/bill-payment/fetchBill`,
  electricityPayBill: `${apiBaseUrl}electricity/bill-payment/payBill`,

  waterGetOperaterList: `${apiBaseUrl}water/bill-payment/getOperaterList`,
  waterFetchBill: `${apiBaseUrl}water/bill-payment/fetchBill`,
  waterPayBill: `${apiBaseUrl}water/bill-payment/payBill`,

  lpgGetOperatorList: `${apiBaseUrl}lpg-gas/getOperatorList`,
  lpgGetBookingList: `${apiBaseUrl}lpg-gas/getBookingList`,
  lpgFetchDetails: `${apiBaseUrl}lpg-gas/fetchDetails`,
  lpgFetchBookingDetails: `${apiBaseUrl}lpg-gas/fetchBookingDetails`,
  lpgPayBill: `${apiBaseUrl}lpg-gas/payBill`,
  lpgBookGas: `${apiBaseUrl}lpg-gas/bookGas`,

  municipalityGetOperatorList: `${apiBaseUrl}municipality/getOperatorList`,
  municipalityFetchDetails: `${apiBaseUrl}municipality/fetchDetails`,
  municipalityPayBill: `${apiBaseUrl}municipality/payBill`,

  cardPaymentGenerateOTP: `${apiBaseUrl}card-payment/generateOTP`,
  cardPaymentPaybill: `${apiBaseUrl}card-payment/paybill`,
  cardGenerateInvoice: `${apiBaseUrl}card-payment/generateInvoice`,

  DthGetOperatorList: `${apiBaseUrl}dth-recharge/getOperatorList`,
  CableDthGetOperatorList: `${apiBaseUrl}dth-recharge/cable/getOperatorList`,

  DthGetInfo: `${apiBaseUrl}dth-recharge/getInfo`,
  CableDthGetInfo: `${apiBaseUrl}dth-recharge/cable/fetchBill`,
  DthDoRecharge: `${apiBaseUrl}dth-recharge/doRecharge`,
  DthDoRechargeCablePaybill: `${apiBaseUrl}dth-recharge/cable/paybill`,

  broadbandGetOperatorList: `${apiBaseUrl}broadband/bill-payment/getOperaterList`,
  broadbandFetchBill: `${apiBaseUrl}broadband/bill-payment/fetchBill`,
  broadbandPayBill: `${apiBaseUrl}broadband/bill-payment/payBill`,

};






export const APIRequest = async (config = {}, onSuccess, onError, noAuth = null) => {

  const token = localStorage.getItem("token");

  try {
    let data = {};
    if (token && noAuth == null) {
      data = {
        method: config.method,
        url: config.url,
        data: config.body,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          token: token,
        },
      };
    } else {
      data = {
        method: config.method,
        url: config.url,
        data: config.body,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
    }
    console.log(data);
    axios(data)
      .then(res => {
        console.log(res, 'api--------');
        if (!res?.data?.error) {
          onSuccess(res?.data);
        } else {
          onError(res?.data ? res.data : res);
        }
      })
      .catch(err => {
        console.log(err);
        onError(err?.response?.data ? err?.response.data : err?.response);
      });
  } catch (error) {
    console.log("error", error);
  }
};

export const APIRequestWithFile = async (config = {}, onSuccess, onError) => {
  const token = localStorage.getItem("token");

  try {
    let data;
    if (token) {
      data = {
        method: config.method,
        url: config.url,
        data: config.body,
        headers: {
          Accept: 'multipart/form-data',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
          token: token

        },
      };
    } else {
      data = {
        method: config.method,
        url: config.url,
        data: config.body,
        headers: {
          Accept: 'multipart/form-data',
          'Content-Type': 'multipart/form-data',
        },
      };
    }

    console.log('config', data);
    axios(data)
      .then(res => {
        if (res.status == 200 || res.status == 201) {
          console.log(res.data);
          onSuccess(res.data);
        }
      })
      .catch(err => {
        onError(err?.response);
      });
  } catch (error) {
    console.log(error);
  }
};


export const Statelist = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Orissa',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Tripura',
  'Uttarakhand',
  'Uttar Pradesh',
  'West Bengal',
  'Tamil Nadu',
  'Tripura',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli',
  'Daman and Diu',
  'Delhi',
  'Lakshadweep',
  'Pondicherry',
  ]