const router = require('express').Router()
const userController = require('../api/user/userController')
const committeDetailController = require('../api/committeDetail/committeDetailController')
const committeTypeController = require('../api/committeType/committeTypeController')
const customerController = require('../api/customer/customerController')
const requestController = require('../api/request/requestController')
const chatController = require('../api/chat/chatController')
const dashboardController = require('../api/dashboard/dashboardController')

const multer = require('multer')


//auth
router.post('/login', userController.login)

router.post("/committeType/all",  committeTypeController.all) 
router.post("/committeDetail/all", committeDetailController.all)

router.use(require('../middleware/tokenChecker'))

// Committe Type Routes
const committeTypeStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/public/types')
    },
    filename: function (req, file, cb) {

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

const committeTypeUpload = multer({ storage: committeTypeStorage })


router.post("/committeType/add", committeTypeUpload.single('thumbnail'), committeTypeController.add)
router.post("/committeType/update", committeTypeUpload.single('thumbnail'), committeTypeController.update)

router.post("/committeType/single",  committeTypeController.single) 
router.post("/committeType/status",  committeTypeController.changeStatus) 




// Committe Detail
router.post("/committeDetail/add", committeDetailController.add)
router.post("/committeDetail/update", committeDetailController.update)
router.post("/committeDetail/status", committeDetailController.changeStatus)
router.post("/committeDetail/single", committeDetailController.single)



// Request
router.post('/request/status', requestController.changeStatus)
router.post('/request/all', requestController.allRequests)


// Chat
router.post("/chat/add", chatController.add)
router.post("/chat/all", chatController.all)
router.post("/chat/single", chatController.single)
router.post('/chat/singleById', chatController.singleById)
router.post('/chat/addEmptyChat', chatController.addEmptyChat)
router.post("/chat/deleteMsg", chatController.delMessage)

//all users
router.post("/allUsers", userController.all)

// Customer

router.post('/customer/single', customerController.single)
router.post('/customer/all', customerController.all)
router.post('/customer/status', customerController.changeStatus)



router.post("/dashboard", dashboardController.dashboard) 


module.exports = router