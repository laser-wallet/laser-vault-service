"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bundleTransactions = exports.verifyTransactions = void 0;
function verifyTransactions(tx1, tx2) {
    if (tx1.to.toLowerCase() !== tx2.to.toLowerCase()) {
        throw Error("Transaction 'to' mismatch");
    }
    if (tx1.value !== tx2.value) {
        throw Error("Transaction 'value' mismatch");
    }
    if (tx1.callData.toLowerCase() !== tx2.callData.toLowerCase()) {
        throw Error("Transaction 'callData' mismatch");
    }
    if (tx1.nonce !== tx2.nonce) {
        throw Error("Transaction 'nonce' mismatch");
    }
    if (tx1.transactionType !== tx2.transactionType) {
        throw Error("Transaction 'transactionType' mismatch");
    }
    if (tx1.signatures.length < 132 || tx2.signatures.length < 132) {
        throw Error("Invalid signatures");
    }
    if (tx1.signer === tx2.signer) {
        throw Error("Duplicate signer");
    }
}
exports.verifyTransactions = verifyTransactions;
function bundleTransactions(tr1, tr2) {
    verifyPackedSignatures(tr1, tr2);
    if (tr1.transactionType === "exec") {
        return {
            wallet: tr1.wallet,
            to: tr1.to,
            value: tr1.value,
            callData: tr1.callData,
            nonce: tr1.nonce,
            signatures: tr1.signer === "owner"
                ? tr1.signatures + tr2.signatures.slice(2)
                : tr2.signatures + tr1.signatures.slice(2),
            signer: tr1.signer,
            chain: tr1.chain,
            transactionType: "exec",
        };
    }
    else {
        let sigs;
        if (tr1.signer === "owner") {
            sigs = tr1.signatures + tr2.signatures.slice(2);
        }
        else if (tr2.signer === "owner") {
            sigs = tr2.signatures + tr1.signatures.slice(2);
        }
        else {
            sigs =
                tr1.signer === "recoveryOwner"
                    ? tr1.signatures + tr2.signatures.slice(2)
                    : tr2.signatures + tr1.signatures.slice(2);
        }
        return {
            wallet: tr1.wallet,
            to: tr1.to,
            value: tr1.value,
            callData: tr1.callData,
            nonce: tr1.nonce,
            signatures: sigs,
            signer: tr1.signer,
            chain: tr1.chain,
            transactionType: "recovery",
        };
    }
}
exports.bundleTransactions = bundleTransactions;
function verifyPackedSignatures(tr1, tr2) {
    if (tr1.signer !== "owner" &&
        tr1.signer !== "guardian" &&
        tr1.signer !== "recoveryOwner") {
        throw Error("Invalid signer");
    }
    if (tr2.signer !== "owner" &&
        tr2.signer !== "guardian" &&
        tr2.signer !== "recoveryOwner") {
        throw Error("Invalid signer");
    }
    if (tr1.signer.toLowerCase() === tr2.signer.toLowerCase()) {
        throw Error("Signers cannot be the same.");
    }
    if (("value" in tr1 && !("value" in tr2)) ||
        ("value" in tr2 && !("value" in tr1))) {
        throw Error("Transaction types mismatch.");
    }
    if ("to" in tr1 && "to" in tr2) {
        if (tr1.to.toLowerCase() !== tr2.to.toLowerCase()) {
            throw Error("Transaction 'to' mismatch.");
        }
    }
    if ("value" in tr1 && "value" in tr2) {
        if (tr1.value.toString() !== tr2.value.toString()) {
            throw Error("Transaction 'value' missmatch.");
        }
    }
    if (tr1.nonce.toString() !== tr2.nonce.toString()) {
        throw Error("Transaction 'nonce' mismatch.");
    }
    if (tr1.callData.toLowerCase() !== tr2.callData.toLowerCase()) {
        throw Error("Transaction 'callData' missmatch.");
    }
    if (tr1.signatures.length < 132 || tr2.signatures.length < 132) {
        throw Error("Invalid signature length.");
    }
}
//# sourceMappingURL=utils.js.map