const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)

const data = {
    basquet: ["01-01", "01-02", "01-06", "01-07"],
    water: ["01-01", "01-02", "01-06", "01-07"]
}

nlwSetup.setData(data)
nlwSetup.load()