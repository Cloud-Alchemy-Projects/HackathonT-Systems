export const getWork = async (req, res) => {
    try {
        res.status(200).render("work/work")
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}