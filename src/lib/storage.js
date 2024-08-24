import { readFileSync, writeFileSync, existsSync } from 'fs';

const filePath = 'src/lib/FilesStorage.json';

export function loadStoredData() {
    if (existsSync(filePath)) {
        const data = readFileSync(filePath, 'utf-8');
        console.log(data, "data loaded");
        return JSON.parse(data);
    }
    else {
        return [];
    }
}

export function saveDataSmallSave(dataToSave) {
    const data = loadStoredData();
    data.push(dataToSave);
    writeFileSync(filePath, JSON.stringify(data));
    console.log(data, "data saved");

}





// Steps to save binary data in folders:
// 1. Create a top-level directory for binary files (apod-binary-files)
// 2. Inside this directory, create a subdirectory for each year
// 3. Inside each year directory, create a subdirectory for each month
// 4. Inside each month directory, create a subdirectory for each day
// 5. Store the binary file in the corresponding day directory, with a filename that includes the date (e.g. 2022-07-25.jpg)
// 6. Update the JSON metadata with the file path (e.g. "binaryFilePath": "apod-binary-files/2022/07/25/2022-07-25.jpg")

// export function saveDataLargeSave(apod) {


//     const data = loadStoredData();
//     const binaryFile = apod.binaryFile; // assume apod has a binaryFile property
//     const date = apod.date; // assume apod has a date property (e.g. "2022-07-25")
//     const year = date.substring(0, 4); // extract the year
//     const month = date.substring(5, 7); // extract the month
//     const day = date.substring(8, 10); // extract the day
//     const binaryFileName = `${year}-${month}-${day}.jpg`; // or .mp4, etc.

//     // create the year directory if it doesn't exist
//     const yearDir = path.join(binaryFilesDir, year);
//     if (!fs.existsSync(yearDir)) {
//         fs.mkdirSync(yearDir);
//     }

//     // create the month directory if it doesn't exist
//     const monthDir = path.join(yearDir, month);
//     if (!fs.existsSync(monthDir)) {
//         fs.mkdirSync(monthDir);
//     }

//     // create the day directory if it doesn't exist
//     const dayDir = path.join(monthDir, day);
//     if (!fs.existsSync(dayDir)) {
//         fs.mkdirSync(dayDir);
//     }

//     // write the binary file to the day directory
//     fs.writeFileSync(path.join(dayDir, binaryFileName), binaryFile);

//     // update the JSON metadata with the file path
//     apod.binaryFilePath = path.join(dayDir, binaryFileName);
//     data.push(apod);

//     // write the updated JSON metadata to the file
//     writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
// }
