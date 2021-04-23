import * as pulumi from "@pulumi/pulumi";
import * as Azure from "@pulumi/azure";
import * as resources from "@pulumi/azure-native/resources";
import * as vm from "@pulumi/azure-native/compute";
import * as vNetwork from "@pulumi/azure-native/network";


// Resource Group

const resourceGroup = pulumi.output(resources.getResourceGroup({
    resourceGroupName: "networking"
}, { async: true }))

export const rsGroupName = resourceGroup.name

//

// Virtual Machine

const vms = pulumi.output(vm.getVirtualMachine({
    vmName: "production",
    resourceGroupName: "networking",
}, { async: true }));

export const VMName = vms.name
export const VMLocation = vms.location

//

//Virtual Natwork

const vNat = pulumi.output(vNetwork.getVirtualNetwork({
    virtualNetworkName: "WenVnet",
    resourceGroupName: "networking"

}, { async: true }));

export const vNatName = vNat.name
export const vNatSubnets = vNat.provisioningState


const privateSubnets = pulumi.output(vNetwork.getSubnet({
    virtualNetworkName: "WenVnet",
    resourceGroupName: "networking",
    subnetName: "privateSubnet1"
}));

export const PrivateSubnetName = privateSubnets.name
export const PrivateSubnet1 = privateSubnets.addressPrefix


const publicSubnets = pulumi.output(vNetwork.getSubnet({
    virtualNetworkName: "WenVnet",
    resourceGroupName: "networking",
    subnetName: "publicSubnet1"
}));

export const PublicSubnetName = publicSubnets.name
export const PublicSubnet1 = publicSubnets.addressPrefix

// Function App
const functionApp = pulumi.output(Azure.appservice.getFunctionApp({
    name: "webfunctiopn",
    resourceGroupName: "networking"
}));

export const functionAppName = functionApp.name
export const functionAppOS = functionApp.osType
export const functionAppLinuxFxVersion = functionApp.siteConfigs[0].linuxFxVersion
