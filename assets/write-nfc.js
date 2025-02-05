//alert("Write-NFC ist geladen!")

async function writeTagText() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      try {
        var inputText = document.getElementById('inputText').value;


        singleconsoleLog("Warte auf NFC...\n")

        await ndef.write("What Web Can Do Today");

        consoleLog("\nNFC beschrieben!");

      } catch(error) {
        consoleLog(error);
      }
    } else {
      singleconsoleLog("Web NFC is not supported.");
    }
}