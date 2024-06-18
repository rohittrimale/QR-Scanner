// src/components/QRCodeScanner.js
import React, { useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const QRCodeScanner = () => {
  const [result, setResult] = useState("");

  const handleScan = async () => {
    const codeReader = new BrowserMultiFormatReader();
    try {
      const videoInputDevices = await codeReader.listVideoInputDevices();
      const firstDeviceId = videoInputDevices[0].deviceId;
      codeReader.decodeFromVideoDevice(
        firstDeviceId,
        "video",
        (result, err) => {
          if (result) {
            setResult(result.getText());
            codeReader.reset();
          }
          if (err && !(err instanceof NotFoundException)) {
            console.error(err);
          }
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Card className="w-80 h-96 max-w-md p-2 flex gap-2 justify-center flex-col items-center">
        <CardHeader>
          <CardTitle className="text-xl font-bold">QR Code Scanner</CardTitle>
        </CardHeader>

        <Button onClick={handleScan}>Start Scan</Button>
        <video
          id="video"
          width="300"
          height="200"
          className="rounded-xl"
        ></video>
        <p>{result}</p>
      </Card>
    </div>
  );
};

export default QRCodeScanner;
