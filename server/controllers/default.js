export const getDefault = async (req, res) => {
    try {
        res.status(200).render("default/default")
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}