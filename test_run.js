const fs = require('fs');
const { spawn, exec } = require('child_process');

/*
// From Here, Converting MP3 to ByteArray
const audioBuffer = fs.readFileSync('54321-35890.mp3');

    // Convert the buffer to a byte array
const byteArray = Array.from(audioBuffer);

console.log(byteArray)
// Upto Here


// From here, converting ByteArray to MP3 and downloading it
const newAudioBuffer = Buffer.from(byteArray);

    // Write the audio stream to a file
const fileName = 'audio.mp3';
const filePath = `./hello/${fileName}`;
fs.writeFileSync(filePath, newAudioBuffer)

console.log(`Audio downloaded to ${filePath}`);
*/
// Upto here

const audioBuffer = fs.readFileSync('54321-35890.mp3');

const byteArray = Array.from(audioBuffer);
const newAudioBuffer = Buffer.from(byteArray);


const tempFileName = 'temp_audio.mp3';
fs.writeFileSync(tempFileName, newAudioBuffer);

    // Play the audio file using the default system player
const player = exec(`start "" "${tempFileName}"`);
    // const player = spawn('play', [tempFileName]); // Linux

player.on('exit', () => {
        console.log('Audio playback finished.');
        fs.unlinkSync(tempFileName); // Delete the temporary file after playback
    });

player.on('error', (error) => {
        console.error('Error playing audio:', error);
    });