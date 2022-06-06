export const getAbout = async (req, res) => {
    try {
        res.status(200).render("about/about")
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}