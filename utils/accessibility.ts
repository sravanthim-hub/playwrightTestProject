import AxeBuilder from "@axe-core/playwright"
import { expect, Page } from "@playwright/test"

export default class accessibility {
    public wgca = 'wcag2aa'
    constructor(page: Page)
    {

    }
    async a11y(page){
        const axe = new AxeBuilder({page}).withTags(this.wgca)
        const {violations} = await axe.analyze()
        console.log(violations)
        expect(violations).toHaveLength(0)

        console.log(`${violations.length} were identified`)
    }
}