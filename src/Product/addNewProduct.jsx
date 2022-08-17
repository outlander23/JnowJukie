import React, { useState } from "react";
import "./style.css";
import { UploadOutlined, SelectOutlined } from "@ant-design/icons";
import { Upload, Button, Anchor, Collapse, Radio, Space, Checkbox } from "antd";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import AccordionHeaderCustom from "../Components/AccordionHeader";
import RadioCustom from "../Components/RadioCustom";
import CheckBoxCustom from "../Components/CheckBoxCustom";
const { Panel } = Collapse;
const { Link } = Anchor;

function Icon({ id, open }) {
  return (
    <>
      {open !== id && (
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          class=" inline-block w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none"
        />
      )}

      {open === id && (
        <input class="w-5 h-5 text-blue-600 bg-gray-100 border-blue-600 rounded-full border-4" />
      )}
    </>
  );
}

const AddNewProduct = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="">
      <div className="pl-14 w-full h-full">
        <div class="block">
          <nav class="nav-bar-header">
            <h1 class="nav-bar-h3">New product</h1>
          </nav>
          <div class="description-container">
            <div class="p-8">
              <div className="block">
                <div class="-ml-4 -mr-4 md:flex md:flex-row md:justify-start md:items-start md:pt-8">
                  <div class="relative min-h-min pl-4 pr-4 mb-4 md:w-1/4">
                    <div id="" class="block  pt-12 pb-10">
                      <h3 class="description-container-h3 mb-4">
                        General information
                      </h3>
                      <div class="description-container-text leading-5 pt-3">
                        This information helps you and your customers identify
                        the product on orders, documents and in the online
                        store.
                      </div>
                    </div>
                  </div>
                  <div className="relative pl-2 pr-4 block md:w-3/4 p-4">
                    <div className="product-container">
                      <div className="p-5 md:flex md:flex-row md:justify-between md:items-start ">
                        <div className="flex flex-col pb-4 md:w-2/4">
                          <div className="flex items-center justify-between">
                            <label className="mb-2 font-semibold block text-sm color-mini-dark">
                              Product name
                            </label>
                          </div>
                          <span className="block relative text-sm">
                            <input
                              placeholder="eg:Ipad"
                              className="product-description-input focus:ring-1"
                            />
                          </span>
                        </div>
                        <div className="relative  block md:w-2/4 md:pl-6 md:max-w-md">
                          <Upload className="upload-button w-full h-full">
                            <div className="upload-box flex justify-center items-center">
                              <div className="relative block ">
                                <Button type="link">Upload</Button>
                                <small className="upload-button-color block">
                                  or drop a file
                                </small>
                              </div>
                            </div>
                          </Upload>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-t-2 mt-2"></hr>
              {/* Product description */}

              <div className="block">
                <div class="-ml-4 -mr-4 md:flex md:flex-row md:justify-start md:items-start md:pt-8">
                  <div class="relative min-h-min pl-4 pr-4 mb-4 md:w-1/4">
                    <div id="" class="block  pt-12 pb-10">
                      <h3 class="description-container-h3 mb-4">
                        Tracking method
                      </h3>
                      <div class="description-container-text leading-5 pt-3">
                        The
                        <Button
                          href="#components-anchor-demo-basic"
                          type="link"
                          prefix={<SelectOutlined />}
                          icon={<SelectOutlined />}
                          className="m-0 p-0"
                        >
                          tracking method
                        </Button>
                        determines if (and how detailed) a product's inventory
                        is tracked. You can not change this later.
                      </div>
                    </div>
                  </div>
                  <div className="relative pl-2 pr-4 block md:w-3/4 p-4 h-auto">
                    <div className="product-container w-auto h-auto pt-4">
                      <Accordion
                        open={open === 1}
                        icon={<Icon id={1} open={open} />}
                        className="relative"
                        index={0}
                      >
                        <div className="accordion-box ">
                          <AccordionHeader onClick={() => handleOpen(2)}>
                            <AccordionHeaderCustom
                              title="Rental product"
                              description="Products you rent out. They are expected to be returned at the end of a rental period."
                            />
                          </AccordionHeader>
                          <AccordionBody>
                            <div className="mt-3">
                              <div className="accordion-box-content">
                                <Radio.Group>
                                  <Space direction="vertical">
                                    <Radio
                                      value={1}
                                      className="flex justify-start items-center"
                                    >
                                      <RadioCustom
                                        title="Track in bulk"
                                        description=" Only track quantities to easily
                                            handle a large number of items."
                                      />
                                    </Radio>
                                    <Radio
                                      value={2}
                                      className="flex justify-start items-center"
                                    >
                                      <RadioCustom
                                        title="Track individual items"
                                        description="Keep track of individual items using identifiers (like serial numbers)."
                                      />
                                    </Radio>
                                    <hr />
                                    <CheckBoxCustom />
                                  </Space>
                                </Radio.Group>
                              </div>
                            </div>
                          </AccordionBody>
                        </div>
                      </Accordion>

                      <Accordion
                        open={open === 2}
                        icon={<Icon id={2} open={open} />}
                        className="relative"
                      >
                        <div className="accordion-box ">
                          <AccordionHeader onClick={() => handleOpen(2)}>
                            <AccordionHeaderCustom
                              title="Consumable"
                              description="Items you sell or give away. They are not returned at the end of a rental period."
                            />
                          </AccordionHeader>
                          <AccordionBody>
                            <div className="mt-3">
                              <div className="accordion-box-content">
                                <Radio.Group>
                                  <Space direction="vertical">
                                    <Radio
                                      value={1}
                                      className="flex justify-start items-center"
                                    >
                                      <RadioCustom
                                        title={"Not tracked"}
                                        description="Don't track quantities for this product."
                                      />
                                    </Radio>
                                    <Radio
                                      value={2}
                                      className="flex justify-start items-center"
                                    >
                                      <RadioCustom
                                        title={"Track in bulk"}
                                        description="Track quantities for this product."
                                      />
                                    </Radio>
                                    <hr />
                                    <CheckBoxCustom />
                                  </Space>
                                </Radio.Group>
                              </div>
                            </div>
                          </AccordionBody>
                        </div>
                      </Accordion>

                      <Accordion
                        open={open === 3}
                        icon={<Icon id={3} open={open} />}
                      >
                        <div className="accordion-box ">
                          <AccordionHeader onClick={() => handleOpen(3)}>
                            <div className="flex flex-col">
                              <div className="w-full flex justify-start items-center">
                                <label class=" inline-block  font-semibold leading-3 text-xs cursor-pointer">
                                  Service
                                </label>
                              </div>

                              <div className="flex flex-col">
                                <div class="description-accordion">
                                  Non-physical services you offer with rentals
                                  (like setup costs).
                                </div>
                              </div>
                            </div>
                          </AccordionHeader>
                          <AccordionBody>
                            <div className="mt-3">
                              <div className="accordion-box-content">
                                Inventory is not tracked for services
                              </div>
                            </div>
                          </AccordionBody>
                        </div>
                      </Accordion>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              {/* pricing */}
              <div className="block">
                <div class="-ml-4 -mr-4 md:flex md:flex-row md:justify-start md:items-start md:pt-8">
                  <div class="relative min-h-min pl-4 pr-4 mb-4 md:w-1/4">
                    <div id="" class="block  pt-12 pb-10">
                      <h3 class="description-container-h3 mb-4">Pricing</h3>
                      <div class="description-container-text leading-5 pt-3">
                        <p>
                          Determines how the price will be calculated for a
                          rental period.
                        </p>

                        <p>
                          You can configure more/different settings for the
                          price after the product has been created.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative pl-2 pr-4 block md:w-3/4 p-4 h-auto">
                    <div className="product-container w-auto h-auto pt-4">
                      <Accordion
                        open={open === 5}
                        icon={<Icon id={5} open={open} />}
                        className="relative"
                      >
                        <div className="accordion-box ">
                          <AccordionHeader onClick={() => handleOpen(5)}>
                            <AccordionHeaderCustom
                              title="Fixed price"
                              description="Fixed price per order (e.g. $50 each)"
                            />
                          </AccordionHeader>
                          <AccordionBody>
                            <div className="mt-3">
                              <div className="accordion-box-content flex relative">
                                <div>
                                  <h3 className="mb-2 font-semibold block text-sm color-mini-dark">
                                    Price
                                  </h3>
                                  <input className="product-description-input focus:ring-1" />
                                </div>
                              </div>
                            </div>
                          </AccordionBody>
                        </div>
                      </Accordion>

                      <hr />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-t-2 mt-2 mb-4"></hr>
              <div class="-ml-4 -mr-4 md:flex md:flex-row md:justify-start md:items-start md:pt-8">
                <div className="flex w-full justify-end items-end pr-10  ">
                  <Button>Cancel</Button>
                  <Button type="primary" className="ml-5">
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
