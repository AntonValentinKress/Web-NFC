//alert("Read-NFC ist geladen!")

async function readTag() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      try {
        singleconsoleLog("Warte auf NFC...")
        await ndef.scan();
        ndef.onreading = event => {
          const decoder = new TextDecoder();
          for (const record of event.message.records) {
            consoleLog("Record type:  " + record.recordType);
            consoleLog("MIME type:    " + record.mediaType);
            consoleLog("=== data ===\n" + decoder.decode(record.data));
          }
        }
      } catch(error) {
        consoleLog(error);
      }
    } else {
      singleconsoleLog("Web NFC is not supported.");
    }
  }