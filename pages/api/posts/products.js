import multiparty from 'multiparty';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new multiparty.Form({
    uploadDir: './public/images/upload',
  });
  try {
    const data = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        const filesChecker = Object.keys(files).length > 0;
        if (err || !filesChecker) return reject(err || 'files harus diisi');
        return resolve({ fields: fields, files: files });
      });
    });
    //  Add Some Logic bellow here for sending data to Uloy API'S

    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
