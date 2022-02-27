import { v4 as sys_uuid } from 'uuid';
import {
    arrayDifference,
    arrayIntersection,
    bundleList,
    compileQuery,
    createTransaction,
    decompileQuery,
    dequeue,
    diffObjects,
    enqueue,
    flattenTree,
    groupBy,
    groupByUnique,
    hash,
    isString,
    newObjectFromClassList,
    parseSchema,
    parseForeignKey,
    setDifference,
    setIntersection,
    setUnion,
    setUuidFunction,
    stringifyContext,
    timeIndexToString,
    tmAssert,
    TMScanner
} from 'tempest-utils'

function uuid() {
    return sys_uuid()
}

setUuidFunction(uuid)

export {
    arrayDifference,
    arrayIntersection,
    bundleList,
    compileQuery,
    createTransaction,
    decompileQuery,
    dequeue,
    diffObjects,
    enqueue,
    flattenTree,
    groupBy,
    groupByUnique,
    hash,
    isString,
    newObjectFromClassList,
    parseSchema,
    parseForeignKey,
    setDifference,
    setIntersection,
    setUnion,
    setUuidFunction,
    stringifyContext,
    timeIndexToString,
    tmAssert,
    TMScanner,
    uuid
}
