import { data } from "../app"
import { expect } from "chai"
import "mocha"

describe("Virtual networks", () => {

    it("Virtual networks name \"WebVnet\" ", () => {
        expect(data["vNatName"], "Name is \"WebVnet\"").to.equal("WebVnet");
    })

    it("Virtual networks private subnet name \"privateSubnet1\" ", () => {
        expect(data["PrivateSubnetName"], "Name is \"privateSubnet1\"").to.equal("privateSubnet1");
    })

    it("Virtual networks public subnet name \"publicSubnet1\" ", () => {
        expect(data["PublicSubnetName"], "Name is \"publicSubnet1\"").to.equal("publicSubnet1");
    })

    it("Virtual networks public subnet addressPrefix ", () => {
        expect(data["PrivateSubnet1"], "addressPrefix is 10.1.1.0/24").to.equal("10.1.1.0/24");
    })

    it("Virtual networks public subnet addressPrefix ", () => {
        expect(data["PublicSubnet1"], "addressPrefix is 10.1.4.0/24").to.equal("10.1.4.0/24");
    })


})

