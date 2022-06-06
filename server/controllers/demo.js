export const getDemo = async (req, res) => {
    try {
        res.status(200).render("demo/demo")
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}