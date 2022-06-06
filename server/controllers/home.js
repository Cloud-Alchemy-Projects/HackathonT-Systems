export const getHome = async (req, res) => {
    try {
        res.status(200).render("home/index")
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}