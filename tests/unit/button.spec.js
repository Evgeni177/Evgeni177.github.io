import { shallowMount } from '@vue/test-utils'
import DynamicButton from '@/components/DynamicButton.vue'

describe('DynamicButton', () => {
  it('renders props.msg when passed', () => {
    let msg = "hello";
    const wrapper = shallowMount(DynamicButton, {
      propsData: {
        text: msg,
      }
    })
    expect(wrapper.text()).toContain(msg)
  })
  it('button click function is called',async () => {
    const dynamicButtonClicked = jest.spyOn(DynamicButton.methods, 'dynamicButtonClicked');
    const wrapper = shallowMount(DynamicButton)
    const heroButton = wrapper.find('.button');
    expect(heroButton.exists()).toBe(true)
    await heroButton.trigger('click', {disabled: true});
    expect(dynamicButtonClicked).toHaveBeenCalled()
    expect(wrapper.emitted('dynamicButtonClicked')).toBeTruthy();
  })
  it('test if small button class is attached', () => {
    const wrapper = shallowMount(DynamicButton, {
        propsData: {
            small: true
        }
    })
    expect(wrapper.find('.small').exists()).toBe(true)
    expect(wrapper.find('.medium').exists()).toBe(false);
  })
  it('test if medium button class is attached', () => {
    const wrapper = shallowMount(DynamicButton, {
        propsData: {
            medium: true
        }
    })
    expect(wrapper.find('.medium').exists()).toBe(true)
    expect(wrapper.find('.small').exists()).toBe(false);
  })
  it('test if large button class is attached', () => {
    const wrapper = shallowMount(DynamicButton, {
        propsData: {
            large: true
        }
    })
    expect(wrapper.find('.large').exists()).toBe(true)
    expect(wrapper.find('.small').exists()).toBe(false);
    expect(wrapper.find('.medium').exists()).toBe(false);
  })
})
