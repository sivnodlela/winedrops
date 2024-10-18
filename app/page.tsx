"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Revenue from "./components/revenue/Revenue";
import Bottles from "./components/bottles/Bottles";
import Orders from "./components/orders/Orders";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-y-scroll">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text3xl font-bold">Best Selling Wines</h1>
        <Tabs defaultValue="revenue" className="w-[400px]">
          <TabsList className="mb-8">
            <TabsTrigger value="revenue">By revenue</TabsTrigger>
            <TabsTrigger value="bottles">By # bottles sold</TabsTrigger>
            <TabsTrigger value="orders">By # orders</TabsTrigger>
          </TabsList>

          <TabsContent value="revenue">
            <Revenue />
          </TabsContent>
          <TabsContent value="bottles">
            <Bottles />
          </TabsContent>
          <TabsContent value="orders">
            <Orders />
          </TabsContent>
        </Tabs>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        By Winedrops.
      </footer>
    </div>
  );
}
