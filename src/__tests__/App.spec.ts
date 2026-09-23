import App from '@/App.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('App', () => {
	it('mounts renders properly', () => {
		const wrapper = mount(App)
		expect(wrapper.text()).toContain('Berlin Barbershop')
		expect(wrapper.text()).toContain('Welcome, dear barbershopper, to Berlin!')
	})
})
