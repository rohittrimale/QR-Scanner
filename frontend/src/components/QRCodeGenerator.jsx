// src/components/QRCodeGenerator.js
import React, { useState } from "react";
import axios from "axios";
import QRCode from "qrcode.react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { Input } from "./ui/input";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const [qrCodeUrl, setQRCodeUrl] = useState("");

  const handleGenerate = async () => {
    try {
      const response = await axios.post("http://localhost:8080/generate", {
        text,
      });
      setQRCodeUrl(response.data.url);
    } catch (error) {
      console.error("Error generating QR code", error);
    }
  };

  return (
    <div>
      <Card className="w-80 h-96 max-w-md flex gap-3 p-4 justify-center flex-col items-center">
        <CardHeader>
          <CardTitle className="text-xl font-bold">QR Code Generator</CardTitle>
        </CardHeader>

        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />
        <Button onClick={handleGenerate}>Generate QR Code</Button>
        {qrCodeUrl && (
          <div>
            <h3>Your QR Code:</h3>
            <img src={qrCodeUrl} alt="QR Code" />
          </div>
        )}
      </Card>
    </div>
  );
};

export default QRCodeGenerator;
