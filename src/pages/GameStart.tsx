import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Button, Grid, Paper, Link } from '@mui/material';
import { Link as routerLink } from 'react-router-dom';

// const dropzoneStyles = {
//   border: '2px dashed #cccccc',
//   borderRadius: '4px',
//   padding: '20px',
//   textAlign: 'center',
//   cursor: 'pointer'
// }

export default function GameStart(){
  interface FileWithPath extends File {
    path?: string;
  }

  interface OnDropCallback {
    (acceptedFiles: FileWithPath[]): void;
  }

  const onDrop: OnDropCallback = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: FileWithPath) => {
      console.log(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        const fileAsBinaryString = reader.result;
        console.log(fileAsBinaryString);
      };
      reader.readAsBinaryString(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      {/* <Link component={routerLink} to="/game">
        <Button variant="contained">
          Game Start
        </Button>
      </Link>
      <Grid container spacing={2}>
        <Grid size={6} display="flex" justifyContent="center" alignItems="center">
          <Paper sx={{m: '5px'}}>子要素</Paper>
        </Grid>
        <Grid container size={6}>
          <Grid size={12}>
            <Paper>子要素</Paper>
          </Grid>
          <Grid size={12}>
            <Paper>子要素</Paper>
          </Grid>
        </Grid>
      </Grid> */}
      <div {...getRootProps()} 
        // style={dropzoneStyles}
        >
        <input {...getInputProps()} />
        {
          isDragActive ?
          <p>ファイルをここにドロップしてください...</p> :
          <p>ファイルをドラッグ&ドロップするか、ここをクリックしてファイルを選択してください</p>
        }
      </div>
    </Box>
  );
}