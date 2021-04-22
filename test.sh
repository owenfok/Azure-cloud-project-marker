#Deploy the Stack
pulumi up -y
#output stack 
pulumi stack export --file stack.json
#output stack to bucket 
#pulumi stack output -j $primaryStorageKey
# mocha run test
mocha -r ts-node/register tests/*.ts
