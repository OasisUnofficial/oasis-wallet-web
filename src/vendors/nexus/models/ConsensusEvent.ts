/* tslint:disable */
/* eslint-disable */
/**
 * Oasis Nexus API V1
 * An API for accessing indexed data from the Oasis Network.  <!-- Acts as a separator after search in sidebar --> # Endpoints 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ConsensusEventType,
    ConsensusEventTypeFromJSON,
    ConsensusEventTypeFromJSONTyped,
    ConsensusEventTypeToJSON,
    Runtime,
    RuntimeFromJSON,
    RuntimeFromJSONTyped,
    RuntimeToJSON,
} from './';

/**
 * An event emitted by the consensus layer.
 * @export
 * @interface ConsensusEvent
 */
export interface ConsensusEvent {
    /**
     * The block height at which this event was generated.
     * @type {number}
     * @memberof ConsensusEvent
     */
    block: number;
    /**
     * 0-based index of this event's originating transaction within its block.
     * Absent if the event did not originate from a transaction.
     * @type {number}
     * @memberof ConsensusEvent
     */
    tx_index?: number;
    /**
     * Hash of this event's originating transaction.
     * Absent if the event did not originate from a transaction.
     * @type {string}
     * @memberof ConsensusEvent
     */
    tx_hash?: string;
    /**
     * The ID of the runtime to which the event relates, encoded in hex.
     * Present only for events of type `roothash.*`.
     * @type {string}
     * @memberof ConsensusEvent
     */
    roothash_runtime_id?: string;
    /**
     * The runtime to which the event relates.
     * Present only for events of type `roothash.*`.
     * @type {Runtime}
     * @memberof ConsensusEvent
     */
    roothash_runtime?: Runtime;
    /**
     * When applicable, the round in the runtime to which this event
     * relates.
     * Present only for events of type `roothash.*` except for
     * `roothash.execution_discrepancy` before Eden.
     * @type {number}
     * @memberof ConsensusEvent
     */
    roothash_runtime_round?: number;
    /**
     * The second-granular consensus time of this event's block.
     * @type {Date}
     * @memberof ConsensusEvent
     */
    timestamp?: Date;
    /**
     * The type of the event.
     * @type {ConsensusEventType}
     * @memberof ConsensusEvent
     */
    type: ConsensusEventType;
    /**
     * The event contents. This spec does not encode the many possible types;
     * instead, see [the Go API](https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/consensus/api/transaction/results#Event) of oasis-core.
     * This object will conform to one of the `*Event` types two levels down
     * the hierarchy, e.g. `TransferEvent` from `Event > staking.Event > TransferEvent`
     * @type {object}
     * @memberof ConsensusEvent
     */
    body: object;
}

export function ConsensusEventFromJSON(json: any): ConsensusEvent {
    return ConsensusEventFromJSONTyped(json, false);
}

export function ConsensusEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsensusEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'block': json['block'],
        'tx_index': !exists(json, 'tx_index') ? undefined : json['tx_index'],
        'tx_hash': !exists(json, 'tx_hash') ? undefined : json['tx_hash'],
        'roothash_runtime_id': !exists(json, 'roothash_runtime_id') ? undefined : json['roothash_runtime_id'],
        'roothash_runtime': !exists(json, 'roothash_runtime') ? undefined : RuntimeFromJSON(json['roothash_runtime']),
        'roothash_runtime_round': !exists(json, 'roothash_runtime_round') ? undefined : json['roothash_runtime_round'],
        'timestamp': !exists(json, 'timestamp') ? undefined : (new Date(json['timestamp'])),
        'type': ConsensusEventTypeFromJSON(json['type']),
        'body': json['body'],
    };
}

export function ConsensusEventToJSON(value?: ConsensusEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'block': value.block,
        'tx_index': value.tx_index,
        'tx_hash': value.tx_hash,
        'roothash_runtime_id': value.roothash_runtime_id,
        'roothash_runtime': RuntimeToJSON(value.roothash_runtime),
        'roothash_runtime_round': value.roothash_runtime_round,
        'timestamp': value.timestamp === undefined ? undefined : (value.timestamp.toISOString()),
        'type': ConsensusEventTypeToJSON(value.type),
        'body': value.body,
    };
}


