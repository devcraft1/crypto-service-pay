const ServicePay = artifacts.require("ServicePay");

module.exports = function (deployer) {
    deployer.deploy(ServicePay);
};
