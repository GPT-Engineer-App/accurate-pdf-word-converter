import React, { useState } from "react";
import { Container, VStack, Heading, Text, Input, Button, Link, useToast } from "@chakra-ui/react";
import { FaFileUpload, FaFileDownload } from "react-icons/fa";

const Index = () => {
  const [file, setFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const toast = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleFileUpload = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a file to convert.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    // Simulate a file upload and conversion process
    toast({
      title: "File uploaded",
      description: "Your file is being processed.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const downloadFile = () => {
    // Simulate downloading a file
    const element = document.createElement("a");
    const file = new Blob(["This is a dummy converted Word document for the uploaded PDF."], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "converted.docx";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={4} width="100%">
        <Heading>PDF to Word Converter</Heading>
        <Text>Convert your PDF documents to Word files with OCR support for Lao language.</Text>
        <Input type="file" accept=".pdf" onChange={handleFileChange} placeholder="Upload PDF file" size="lg" />
        <Button leftIcon={<FaFileUpload />} colorScheme="blue" onClick={handleFileUpload} isDisabled={!isFilePicked}>
          Upload and Convert
        </Button>
        {isFilePicked && (
          <Button leftIcon={<FaFileDownload />} colorScheme="green" onClick={downloadFile}>
            Download Word File
          </Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
