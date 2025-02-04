//alert("Write-NFC ist geladen!")

async function writeTag() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      try {
        singleconsoleLog("Warte auf NFC...")

        await ndef.write("What Web Can Do Today");

        consoleLog("NDEF message written!");

      } catch(error) {
        consoleLog(error);
      }
    } else {
      singleconsoleLog("Web NFC is not supported.");
    }
}