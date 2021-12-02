const ATM = artifacts.require('ATM')


contract(
    it('should show deployed', () => {
        const deployed = ATM.deployed()
    })
)