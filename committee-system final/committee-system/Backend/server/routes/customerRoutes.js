const router = require('express').Router()
const userController = require('../api/user/userController')
const customerController = require('../api/customer/customerController')
const requestController = require('../api/request/requestController')
const multer = require('multer')
const chatController = require('../api/chat/chatController')
const committeDetailController = require('../api/committeDetail/committeDetailController')
const committeTypeController = require('../api/committeType/committeTypeController')
//auth
router.post('/login', userController.login)

const customerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/public/customer')
    },
    filename: function (req, file, cb) {

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

const customerUpload = multer({ storage: customerStorage })
router.post('/register', customerUpload.single('profile'), customerController.register)


// Middleware

router.use(require('../middleware/tokenChecker'))


router.post('/changePassword', userController.changePassword)
router.post('/profile', customerController.single)
router.post('/update', customerUpload.single('profile'), customerController.update)



// Request
router.post('/request/add', requestController.add)
router.post('/request/all', requestController.allRequests)


// Chat
router.post("/chat/add", chatController.add)
router.post("/chat/all", chatController.all)
router.post("/chat/single", chatController.single)
router.post('/chat/singleById', chatController.singleById)
router.post('/chat/addEmptyChat', chatController.addEmptyChat)
router.post("/chat/deleteMsg", chatController.delMessage)


// Committe Detail

router.post("/committeDetail/single", committeDetailController.single)
router.post("/committeDetail/all", committeDetailController.all)


// Committe Type Routes
router.post("/committeType/all",  committeTypeController.all) 
router.post("/committeType/single",  committeTypeController.single) 


module.exports = router