// To parse this data:
//
//   const Convert = require("./file");
//
//   const boardMongodb = Convert.toBoardMongodb(json);
//   const boardResults = Convert.toBoardResults(json);
//   const boards = Convert.toBoards(json);
//   const card = Convert.toCard(json);
//   const contract = Convert.toContract(json);
//   const deal = Convert.toDeal(json);
//   const deals = Convert.toDeals(json);
//   const intervention = Convert.toIntervention(json);
//   const interventionScore = Convert.toInterventionScore(json);
//   const interventions = Convert.toInterventions(json);
//   const pair = Convert.toPair(json);
//   const pairs = Convert.toPairs(json);
//   const player = Convert.toPlayer(json);
//   const playerHand = Convert.toPlayerHand(json);
//   const requestContract = Convert.toRequestContract(json);
//   const requestResult = Convert.toRequestResult(json);
//   const result = Convert.toResult(json);
//   const round = Convert.toRound(json);
//   const rounds = Convert.toRounds(json);
//   const score = Convert.toScore(json);
//   const scoreBoard = Convert.toScoreBoard(json);
//   const suit = Convert.toSuit(json);
//   const tableMongodb = Convert.toTableMongodb(json);
//   const tableStatus = Convert.toTableStatus(json);
//   const tables = Convert.toTables(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
function toBoardMongodb(json) {
    return cast(JSON.parse(json), r("BoardMongodb"));
}

function boardMongodbToJson(value) {
    return JSON.stringify(uncast(value, r("BoardMongodb")), null, 2);
}

function toBoardResults(json) {
    return cast(JSON.parse(json), r("BoardResults"));
}

function boardResultsToJson(value) {
    return JSON.stringify(uncast(value, r("BoardResults")), null, 2);
}

function toBoards(json) {
    return cast(JSON.parse(json), r("Tables"));
}

function boardsToJson(value) {
    return JSON.stringify(uncast(value, r("Tables")), null, 2);
}

function toCard(json) {
    return cast(JSON.parse(json), r("Card"));
}

function cardToJson(value) {
    return JSON.stringify(uncast(value, r("Card")), null, 2);
}

function toContract(json) {
    return cast(JSON.parse(json), r("RequestContract"));
}

function contractToJson(value) {
    return JSON.stringify(uncast(value, r("RequestContract")), null, 2);
}

function toDeal(json) {
    return cast(JSON.parse(json), r("Deal"));
}

function dealToJson(value) {
    return JSON.stringify(uncast(value, r("Deal")), null, 2);
}

function toDeals(json) {
    return cast(JSON.parse(json), r("Tables"));
}

function dealsToJson(value) {
    return JSON.stringify(uncast(value, r("Tables")), null, 2);
}

function toIntervention(json) {
    return cast(JSON.parse(json), r("Intervention"));
}

function interventionToJson(value) {
    return JSON.stringify(uncast(value, r("Intervention")), null, 2);
}

function toInterventionScore(json) {
    return cast(JSON.parse(json), r("InterventionScore"));
}

function interventionScoreToJson(value) {
    return JSON.stringify(uncast(value, r("InterventionScore")), null, 2);
}

function toInterventions(json) {
    return cast(JSON.parse(json), r("Tables"));
}

function interventionsToJson(value) {
    return JSON.stringify(uncast(value, r("Tables")), null, 2);
}

function toPair(json) {
    return cast(JSON.parse(json), r("Tables"));
}

function pairToJson(value) {
    return JSON.stringify(uncast(value, r("Tables")), null, 2);
}

function toPairs(json) {
    return cast(JSON.parse(json), r("Tables"));
}

function pairsToJson(value) {
    return JSON.stringify(uncast(value, r("Tables")), null, 2);
}

function toPlayer(json) {
    return cast(JSON.parse(json), r("Player"));
}

function playerToJson(value) {
    return JSON.stringify(uncast(value, r("Player")), null, 2);
}

function toPlayerHand(json) {
    return cast(JSON.parse(json), r("PlayerHand"));
}

function playerHandToJson(value) {
    return JSON.stringify(uncast(value, r("PlayerHand")), null, 2);
}

function toRequestContract(json) {
    return cast(JSON.parse(json), r("RequestContract"));
}

function requestContractToJson(value) {
    return JSON.stringify(uncast(value, r("RequestContract")), null, 2);
}

function toRequestResult(json) {
    return cast(JSON.parse(json), r("RequestResult"));
}

function requestResultToJson(value) {
    return JSON.stringify(uncast(value, r("RequestResult")), null, 2);
}

function toResult(json) {
    return cast(JSON.parse(json), r("Result"));
}

function resultToJson(value) {
    return JSON.stringify(uncast(value, r("Result")), null, 2);
}

function toRound(json) {
    return cast(JSON.parse(json), r("Round"));
}

function roundToJson(value) {
    return JSON.stringify(uncast(value, r("Round")), null, 2);
}

function toRounds(json) {
    return cast(JSON.parse(json), r("Tables"));
}

function roundsToJson(value) {
    return JSON.stringify(uncast(value, r("Tables")), null, 2);
}

function toScore(json) {
    return cast(JSON.parse(json), r("Score"));
}

function scoreToJson(value) {
    return JSON.stringify(uncast(value, r("Score")), null, 2);
}

function toScoreBoard(json) {
    return cast(JSON.parse(json), r("Tables"));
}

function scoreBoardToJson(value) {
    return JSON.stringify(uncast(value, r("Tables")), null, 2);
}

function toSuit(json) {
    return cast(JSON.parse(json), r("Suit"));
}

function suitToJson(value) {
    return JSON.stringify(uncast(value, r("Suit")), null, 2);
}

function toTableMongodb(json) {
    return cast(JSON.parse(json), r("TableMongodb"));
}

function tableMongodbToJson(value) {
    return JSON.stringify(uncast(value, r("TableMongodb")), null, 2);
}

function toTableStatus(json) {
    return cast(JSON.parse(json), r("TableStatus"));
}

function tableStatusToJson(value) {
    return JSON.stringify(uncast(value, r("TableStatus")), null, 2);
}

function toTables(json) {
    return cast(JSON.parse(json), r("Tables"));
}

function tablesToJson(value) {
    return JSON.stringify(uncast(value, r("Tables")), null, 2);
}

function invalidValue(typ, val) {
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ) {
    if (typ.jsonToJS === undefined) {
        var map = {};
        typ.props.forEach((p) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ) {
    if (typ.jsToJSON === undefined) {
        var map = {};
        typ.props.forEach((p) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val, typ, getProps) {
    function transformPrimitive(typ, val) {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val);
    }

    function transformUnion(typs, val) {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases, val) {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ, val) {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(typ, val) {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props, additional, val) {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        var result = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(typ, val);
    return transformPrimitive(typ, val);
}

function cast(val, typ) {
    return transform(val, typ, jsonToJSProps);
}

function uncast(val, typ) {
    return transform(val, typ, jsToJSONProps);
}

function a(typ) {
    return { arrayItems: typ };
}

function u(...typs) {
    return { unionMembers: typs };
}

function o(props, additional) {
    return { props, additional };
}

function m(additional) {
    return { props: [], additional };
}

function r(name) {
    return { ref: name };
}

const typeMap = {
    "BoardMongodb": o([
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("BoardMongodbProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "BoardMongodbProperties": o([
        { json: "boardNr", js: "boardNr", typ: r("BoardNr") },
        { json: "N", js: "N", typ: r("E") },
        { json: "E", js: "E", typ: r("E") },
        { json: "S", js: "S", typ: r("E") },
        { json: "W", js: "W", typ: r("E") },
    ], false),
    "E": o([
        { json: "oneOf", js: "oneOf", typ: a(r("EOneOf")) },
    ], false),
    "EOneOf": o([
        { json: "type", js: "type", typ: "" },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "items", js: "items", typ: u(undefined, r("OneOfItems")) },
        { json: "minItems", js: "minItems", typ: u(undefined, 0) },
        { json: "maxItems", js: "maxItems", typ: u(undefined, 0) },
    ], false),
    "OneOfItems": o([
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("PurpleProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "PurpleProperties": o([
        { json: "suit", js: "suit", typ: r("Suit") },
        { json: "value", js: "value", typ: r("Value") },
    ], false),
    "Suit": o([
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "enum", js: "enum", typ: a(r("Enum")) },
        { json: "$schema", js: "$schema", typ: u(undefined, "") },
    ], false),
    "Value": o([
        { json: "type", js: "type", typ: r("Type") },
        { json: "enum", js: "enum", typ: a("") },
    ], false),
    "BoardNr": o([
        { json: "type", js: "type", typ: "" },
        { json: "minimum", js: "minimum", typ: 0 },
    ], false),
    "BoardResults": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("BoardResultsProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "BoardResultsProperties": o([
        { json: "ownResult", js: "ownResult", typ: r("OwnResult") },
        { json: "otherResults", js: "otherResults", typ: r("OtherResults") },
    ], false),
    "OtherResults": o([
        { json: "type", js: "type", typ: "" },
        { json: "items", js: "items", typ: r("OwnResult") },
    ], false),
    "OwnResult": o([
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("OwnResultProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "OwnResultProperties": o([
        { json: "contract", js: "contract", typ: r("SuitClass") },
        { json: "result", js: "result", typ: r("SuitClass") },
        { json: "score", js: "score", typ: r("SuitClass") },
    ], false),
    "SuitClass": o([
        { json: "$ref", js: "$ref", typ: "" },
    ], false),
    "Tables": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "items", js: "items", typ: u(undefined, r("BoardsItems")) },
        { json: "properties", js: "properties", typ: u(undefined, r("BoardsProperties")) },
    ], false),
    "BoardsItems": o([
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "properties", js: "properties", typ: u(undefined, r("FluffyProperties")) },
        { json: "required", js: "required", typ: u(undefined, a("")) },
    ], false),
    "FluffyProperties": o([
        { json: "pair", js: "pair", typ: r("SuitClass") },
        { json: "score", js: "score", typ: r("Level") },
    ], false),
    "Level": o([
        { json: "type", js: "type", typ: "" },
        { json: "minimum", js: "minimum", typ: u(undefined, 0) },
        { json: "maximum", js: "maximum", typ: u(undefined, 0) },
    ], false),
    "BoardsProperties": o([
        { json: "number", js: "number", typ: r("BoardNr") },
        { json: "players", js: "players", typ: r("Players") },
    ], false),
    "Players": o([
        { json: "type", js: "type", typ: "" },
        { json: "items", js: "items", typ: r("SuitClass") },
        { json: "minItems", js: "minItems", typ: 0 },
        { json: "maxItems", js: "maxItems", typ: 0 },
        { json: "uniqueItems", js: "uniqueItems", typ: true },
    ], false),
    "Card": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("CardProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "CardProperties": o([
        { json: "suit", js: "suit", typ: r("SuitClass") },
        { json: "value", js: "value", typ: r("Value") },
    ], false),
    "RequestContract": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("ContractProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "ContractProperties": o([
        { json: "declarer", js: "declarer", typ: r("Value") },
        { json: "level", js: "level", typ: r("Level") },
        { json: "suit", js: "suit", typ: r("Suit") },
        { json: "contra", js: "contra", typ: r("Value") },
        { json: "danger", js: "danger", typ: u(undefined, r("Danger")) },
    ], false),
    "Danger": o([
        { json: "type", js: "type", typ: "" },
    ], false),
    "Deal": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("DealProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "DealProperties": o([
        { json: "boardNr", js: "boardNr", typ: r("BoardNr") },
        { json: "contract", js: "contract", typ: r("ContractClass") },
        { json: "result", js: "result", typ: r("ContractClass") },
        { json: "score", js: "score", typ: r("ContractClass") },
    ], false),
    "ContractClass": o([
        { json: "oneOf", js: "oneOf", typ: a(r("ContractOneOf")) },
    ], false),
    "ContractOneOf": o([
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
    ], false),
    "Intervention": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("InterventionProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "InterventionProperties": o([
        { json: "operationid", js: "operationid", typ: r("Operationid") },
        { json: "datetime", js: "datetime", typ: r("Datetime") },
        { json: "admin", js: "admin", typ: r("Admin") },
        { json: "request", js: "request", typ: r("Request") },
    ], false),
    "Admin": o([
        { json: "oneOf", js: "oneOf", typ: a(r("AdminOneOf")) },
    ], false),
    "AdminOneOf": o([
        { json: "type", js: "type", typ: r("Type") },
        { json: "format", js: "format", typ: "" },
    ], false),
    "Datetime": o([
        { json: "type", js: "type", typ: r("Type") },
        { json: "description", js: "description", typ: "" },
        { json: "format", js: "format", typ: "" },
    ], false),
    "Operationid": o([
        { json: "type", js: "type", typ: "" },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "Request": o([
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("RequestProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "RequestProperties": o([
        { json: "query", js: "query", typ: r("Body") },
        { json: "body", js: "body", typ: r("Body") },
    ], false),
    "Body": o([
        { json: "type", js: "type", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "properties", js: "properties", typ: r("BodyProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "BodyProperties": o([
    ], false),
    "InterventionScore": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("InterventionScoreProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "InterventionScoreProperties": o([
        { json: "percent", js: "percent", typ: r("Level") },
    ], false),
    "Player": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("PlayerProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "PlayerProperties": o([
        { json: "dbvId", js: "dbvId", typ: r("Operationid") },
        { json: "name", js: "name", typ: r("Danger") },
    ], false),
    "PlayerHand": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "items", js: "items", typ: r("SuitClass") },
        { json: "minItems", js: "minItems", typ: 0 },
        { json: "maxItems", js: "maxItems", typ: 0 },
    ], false),
    "RequestResult": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("RequestResultProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "RequestResultProperties": o([
        { json: "result", js: "result", typ: r("SuitClass") },
    ], false),
    "Result": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "minimum", js: "minimum", typ: 0 },
        { json: "maximum", js: "maximum", typ: 0 },
    ], false),
    "Round": o([
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("RoundProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "RoundProperties": o([
        { json: "roundNr", js: "roundNr", typ: r("BoardNr") },
        { json: "tableNr", js: "tableNr", typ: r("Danger") },
        { json: "NS", js: "NS", typ: r("Operationid") },
        { json: "EW", js: "EW", typ: r("Operationid") },
        { json: "deals", js: "deals", typ: r("PurpleDeals") },
    ], false),
    "PurpleDeals": o([
        { json: "type", js: "type", typ: "" },
        { json: "items", js: "items", typ: r("DealsItems") },
        { json: "minItems", js: "minItems", typ: 0 },
        { json: "uniqueItems", js: "uniqueItems", typ: true },
    ], false),
    "DealsItems": o([
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("TentacledProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "TentacledProperties": o([
        { json: "collection", js: "collection", typ: r("Operationid") },
        { json: "id", js: "id", typ: r("Danger") },
    ], false),
    "Score": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("ScoreProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "ScoreProperties": o([
        { json: "points", js: "points", typ: r("Level") },
        { json: "percent", js: "percent", typ: r("Level") },
        { json: "override", js: "override", typ: r("Override") },
    ], false),
    "Override": o([
        { json: "oneOf", js: "oneOf", typ: a(r("Level")) },
    ], false),
    "TableMongodb": o([
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("TableMongodbProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "TableMongodbProperties": o([
        { json: "clientToken", js: "clientToken", typ: r("ClientToken") },
        { json: "currentRound", js: "currentRound", typ: r("BoardNr") },
        { json: "tableNr", js: "tableNr", typ: r("Danger") },
    ], false),
    "ClientToken": o([
        { json: "oneOf", js: "oneOf", typ: a(r("Operationid")) },
    ], false),
    "TableStatus": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("TableStatusProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "TableStatusProperties": o([
        { json: "currentRound", js: "currentRound", typ: r("BoardNr") },
        { json: "tableNr", js: "tableNr", typ: r("Danger") },
        { json: "NS", js: "NS", typ: r("SuitClass") },
        { json: "EW", js: "EW", typ: r("SuitClass") },
        { json: "boardsNotYetEntered", js: "boardsNotYetEntered", typ: r("BoardsNotYetEntered") },
        { json: "deals", js: "deals", typ: r("FluffyDeals") },
    ], false),
    "BoardsNotYetEntered": o([
        { json: "type", js: "type", typ: "" },
        { json: "items", js: "items", typ: r("BoardsNotYetEnteredItems") },
    ], false),
    "BoardsNotYetEnteredItems": o([
        { json: "type", js: "type", typ: "" },
        { json: "properties", js: "properties", typ: r("StickyProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "StickyProperties": o([
        { json: "boardNr", js: "boardNr", typ: r("BoardNr") },
        { json: "missingDirections", js: "missingDirections", typ: r("MissingDirections") },
    ], false),
    "MissingDirections": o([
        { json: "type", js: "type", typ: "" },
        { json: "items", js: "items", typ: r("Value") },
    ], false),
    "FluffyDeals": o([
        { json: "type", js: "type", typ: "" },
        { json: "items", js: "items", typ: r("SuitClass") },
    ], false),
    "Enum": [
        "clubs",
        "diamonds",
        "hearts",
        "noTrump",
        "spades",
    ],
    "Type": [
        "string",
    ],
};

module.exports = {
    "boardMongodbToJson": boardMongodbToJson,
    "toBoardMongodb": toBoardMongodb,
    "boardResultsToJson": boardResultsToJson,
    "toBoardResults": toBoardResults,
    "boardsToJson": boardsToJson,
    "toBoards": toBoards,
    "cardToJson": cardToJson,
    "toCard": toCard,
    "contractToJson": contractToJson,
    "toContract": toContract,
    "dealToJson": dealToJson,
    "toDeal": toDeal,
    "dealsToJson": dealsToJson,
    "toDeals": toDeals,
    "interventionToJson": interventionToJson,
    "toIntervention": toIntervention,
    "interventionScoreToJson": interventionScoreToJson,
    "toInterventionScore": toInterventionScore,
    "interventionsToJson": interventionsToJson,
    "toInterventions": toInterventions,
    "pairToJson": pairToJson,
    "toPair": toPair,
    "pairsToJson": pairsToJson,
    "toPairs": toPairs,
    "playerToJson": playerToJson,
    "toPlayer": toPlayer,
    "playerHandToJson": playerHandToJson,
    "toPlayerHand": toPlayerHand,
    "requestContractToJson": requestContractToJson,
    "toRequestContract": toRequestContract,
    "requestResultToJson": requestResultToJson,
    "toRequestResult": toRequestResult,
    "resultToJson": resultToJson,
    "toResult": toResult,
    "roundToJson": roundToJson,
    "toRound": toRound,
    "roundsToJson": roundsToJson,
    "toRounds": toRounds,
    "scoreToJson": scoreToJson,
    "toScore": toScore,
    "scoreBoardToJson": scoreBoardToJson,
    "toScoreBoard": toScoreBoard,
    "suitToJson": suitToJson,
    "toSuit": toSuit,
    "tableMongodbToJson": tableMongodbToJson,
    "toTableMongodb": toTableMongodb,
    "tableStatusToJson": tableStatusToJson,
    "toTableStatus": toTableStatus,
    "tablesToJson": tablesToJson,
    "toTables": toTables,
};
