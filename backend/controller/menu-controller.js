const menuModel = require(`../models/index`).menu;
const upload = require(`./upload-menu`);
const path = require(`path`);
const fs = require(`fs`);
const joi = require(`joi`);
const { Op } = require("sequelize");

const validateMenu = (input) => {
  let rules = joi.object().keys({
    nama_menu: joi.string().required(),
    deskripsi: joi.string().required(),
    harga: joi.number().required(),
    jenis: joi.valid("makanan", "minuman").required(),
  });
  let { error } = rules.validate(input);
  if (error) {
    let message = error.details.map((item) => item.message).join(`,`);

    return {
      status: false,
      message: message,
    };
  }
  return {
    status: true,
  };
};

exports.addMenu = async (request, response) => {
  try {
    const uploadMenu = upload.single(`gambar`);
    uploadMenu(request, response, async (error) => {
      if (error) {
        return response.json({
          status: false,
          message: error,
        });
      }
      if (!request.file) {
        return response.json({
          status: false,
          message: `Nothing file to upload`,
        });
      }

      let resultValidation = validateMenu(request.body);
      if (resultValidation.status === false) {
        return response.json({
          status: false,
          message: resultValidation.message,
        });
      }

      request.body.gambar = request.file.filename;

      const dataMenu = await menuModel.create(request.body);
      return response.json({
        status: true,
        data: dataMenu,
        message: `menu has created`,
      });
    });
  } catch (error) {
    return response.json({
      status: false,
      message: error.message,
    });
  }
};

exports.getMenu = async (request, response) => {
  try {
    let result = await menuModel.findAll();
    return response.json({
      status: true,
      data: result,
    });
  } catch (error) {
    return response.json({
      status: false,
      message: error.message,
    });
  }
};

exports.getMenuByID = async (request, response) => {
  try {
    const id_menu = request.params.id_menu;
    const menu = await menuModel.findByPk(id_menu);

    if (!menu) {
      return response.status(404).json({
        status: false,
        message: "menu tidak ditemukan.",
      });
    }

    return response.json({
      status: true,
      data: menu,
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

exports.updateMenu = async (request, response) => {
    try {
      const uploadMenu = upload.single('gambar');  
      uploadMenu(request, response, async (error) => {
        if (error) {
          return response.json({
            status: false,
            message: error.message, 
          });
        }
  
        let resultValidation = validateMenu(request.body);
        if (resultValidation.status === false) {
          return response.json({
            status: false,
            message: resultValidation.message,  
          });
        }
  
        let id_menu = request.params.id_menu;
        let selectedMenu = await menuModel.findOne({
          where: { id_menu: id_menu },
        });
  
        if (!selectedMenu) {
          return response.json({
            status: false,
            message: 'Menu tidak ditemukan.',
          });
        }
  
        if (request.file) {
          let oldFilename = selectedMenu.gambar;
          let pathFile = path.join(__dirname, '../menu-image', oldFilename);
          if (fs.existsSync(pathFile)) {
            fs.unlinkSync(pathFile); 
          }
          request.body.gambar = request.file.filename;  
        }
  
        await menuModel.update(request.body, { where: { id_menu: id_menu } });
  
        return response.json({
          status: true,
          message: 'Data menu berhasil diubah',
        });
      });
    } catch (error) {
      return response.json({
        status: false,
        message: error.message, 
      });
    }
  };
  

exports.deleteMenu = async (request, response) => {
  try {
    let id_menu = request.params.id_menu;
    let selectedMenu = await menuModel.findOne({ where: { id_menu: id_menu } });
    let pathFile = path.join(__dirname, `../menu-image`, selectedMenu.gambar);
    if (fs.existsSync(pathFile)) {
      fs.unlinkSync(pathFile, (error) => {
        console.log(error);
      });
    }
    await menuModel.destroy({ where: { id_menu: id_menu } });
    return response.json({
      status: true,
      message: `Data menu berhasil dihapus`,
    });
  } catch (error) {
    return response.json({
      status: false,
      message: error.message,
    });
  }
};
