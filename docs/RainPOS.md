# How to use Rain POS
Rain POS is run off of a web browser. We have the webpage bookmarked in Chrome.
  - You will need to have a user set up with a PIN
  - If not set up yet contact management to get set up.
https://www.rainadmin.com/site-configuration/auth/login.php

![Rain POS Home Image](Images/POS/RainPosHome.png)

## 1. Ringing Up Items
#### 1.1 When you are ready to ring someone up, you will need to click on the icon Register on the left-hand side of the screen

![RegisterIcon](Images/POS/RegisterIcon.png)
  - Each transaction you will need to type in your PIN

![Pin Image](Images/POS/PinPage.png)

#### 1.2 Make sure that the courser is in the Product Title/SKU box before you start scanning items.

![Product TItle SKU Image](Images/POS/ProductTitleSKU.png)

- Once you scan an item make sure that it is the correct item that they are purchasing. (Product, Color, Size)
- If there are multiple items of the same (size, color) you can click on the QTY and update to the correct amount.

![Qty](Images/POS/QtyBox.png)

![Change QTY](Images/POS/ChangeQTY.png)

<span style="color: red;">**If this is not done correctly the inventory will be off, and will need to be corrected.**
#### 1.3 Once you have scanned all the items make sure that they are all there and correct.
#### 1.4 Let the customer know the total for the transaction, and ask if they will be paying cash or card.

![Checking Out](Images/POS/CheckingOut.png)

  - If paying by card, click on the card option, and click the pay button.
  - This activates the card machine and they can complete the payment.

![Card](Images/POS/CardPayment.png)

<span style="color: red;">**Note that this card reader does not accept Maestro Cards or the local bank cards from RBC/MCB, unless they are credit cards. We do accept AMEX, all other major credit cards, and Apple/Google Pay**

- If paying with cash, click on the cash option. You can type the amount they give you, or click on the cash choices available.
- Click save.

![Cash Payment](Images/POS/CashPayment.png)

#### 1.5 Once payment is complete click on the green Complete button to print the receipt.
![Complete](Images/POS/CompleteButton.png)
  - Make sure that the printer is the Star TSP100 Cutter (normally will automatically be selected, unless you printed something on another printer)
  - Once the receipt prints then the cash drawer will open.

![Printer](Images/POS/Printer.png)

## 2 Booking Edge Ferry Tickets
#### 2.1 Open up a Web Browser, or open another tab on the Chrome web browser.
  - Go to www.junglebee.com or it is bookmarked on Chrome
  - The ones we always use are starred
  - This is what the dashboard will look like

![JB Dashboard](Images/Edge/JBdashboard.png)

#### 2.2 Ask the customer which way they would like to travel St. Maarten to Saba or Saba to St. Maarten
  - Click on the one that they need **(The example I am using is Saba to St. Maarten)**
  - There will be blue boxes for the days that they travel, so select the correct date that the customer requested. If you need a date in the future there is a lime green calendar above the dates that you can change which week you are looking at.
    - If the boxes are **YELLOW** it means they are getting close to selling out.
    - If the boxes are **RED** it means they are almost sold out.
    - If the boxes are **GREY** it means they are cancelled or sold out.

![SXM](Images/Edge/JBtoSXM.png)

<span style="color: red;">**In order to get LOCAL pricing must have a valid Saba/St. Maarten ID card. Not the passport, must be ID card.**

#### 2.3 At the top you will have to select the number of passengers traveling. You can book multiple people on 1 ticket.
  - Adult pricing is 14 and up: $75 for Tourist, and $60 for Local
  - Children 5 - 13 pricing is: $38 for Tourist, and $30 for Local
  - Children 0 - 4 pricing is: $25 for both Tourist and Local

![Travelers](Images/Edge/JBTravelers.png)

#### 2.4 Enter the First and Last name as it appears on their passports/ID cards, and a way to get in contact with them if something happens (Email/Phone#)
  - If multiple people are traveling enter their names in the special note box.
  - If they are children I like to enter their ages next to their names.

![Guest Details](Images/Edge/JBGuestDetails.png)

<span style="color: red;">**Do not enter anything in the Additional Tour Add-Ons section. We let the Captain decide if he charges for luggage.**

#### 2.5 Payment breakdown, leave the payment method as CASH. Enter the total cost of the tickets.

![Payment](Images/Edge/JBPayment.png)

#### 2.6 Once all the information is filled in and correct, click on CREATE BOOKING.
  - A window will pop up and ask you to verify that all the information is correct
  - If all correct click on Confirm Booking at the bottom.

![Confirm](Images/Edge/JBConfirmBooking.png)

#### 2.7 Once you confirm the booking, it will assign a Booking Number (We call it the JB#)
  - Copy the Booking # or JB#
  - Click on Print Ticket, to print the ticket for the customer.
  
<span style="color: red;">**Make sure that the printer selected is the STAR printer, but also that the Paper Size option is STAR Thermal 80mm x A4. Otherwise it will continually print and will go until it runs out of paper or you shut off the printer and cancel the print job.**

![Print Ticket](Images/Edge/JBPrintTicket.png)

#### 2.8 Now you will switch to Rain POS.
  - Enter the Customer Name in the top box.
    - If they are already in the system they will show in a drop down.
    - If they are not already in the system please create them as a new customer, by clicking the little contact add button next to the customer box.
  - In the Product Title/SKU box type in "Edge" and it will have a drop down of all the Edge Ferry items.
    - Please make sure that you select the correct items that you booked on Junglebee. (Ex: Tourist or Local, and Adult or Child)

![Entry](Images/Edge/POSEntry.png)

  - Once you have the customer name and the tickets selected correctly, you will need to click on the little pencil icon on the line item.
    - It will pop up a little window to the side with a Note box, paste the JB# that you copied here.
    - Click save

![POS JB](Images/Edge/POSJB.png)
![POS Note](Images/Edge/POSNote.png)

<span style="color: red;">**IF YOU DO NOT PUT THE CUSTOMER NAME OR THE JB# IN THE NOTES WE HAVE NO IDEA WHO THE TICKET WAS FOR. WE HAVE TO RUN REPORTS WEEKLY/MONTHLY AND IT ADDS A LOT OF TIME WHEN WE HAVE TO TRY TO FIND OUT WHICH TRANSACTION GOES WITH WHICH TICKET.**

#### 2.9 Finish taking payment from the customer.

## 3. Cancelling and Refunding Edge Tickets
<span style="color: red;">**WE CANNOT CHANGE, CANCEL OR REFUND AN EDGE TICKET THAT WAS MADE WITH AQUA MANIA**

#### 3.1 In Junglebee you will need to pull up the booking and click on it to bring you to this window, scroll down to the bottom of the window. Click on Add refund, and refund the amount that they paid.
- Make sure that you check the special notes to see if the ticket is not eligible for a refund.

![Add Refund](Images/Edge/AddRefund.png)

#### 3.2 If it doesn’t automatically cancel the booking then you will click on cancel booking on the right hand side.

![Cancel Booking](Images/Edge/CancelBooking.png)

#### 3.3 Once you do this in Junglebee you will also need to do it in Rain POS, to refund the ticket in our system.
 This is easiest if they have the receipt with them, because you can scan the barcode at the bottom of their receipt and it will automatically pull up their transaction.
- If they do not have the receipt, then you need to click on Reports, End of Day, and then search the day that they bought the ticket, and find their receipt in the system.

![End of Day](Images/POS/EndOfDay.png)
![Transaction](Images/POS/Transaction.png)

- Open up their receipt and click on return items, if there are multiple items you will just need to select the one that is being returned. There will be a **RED** return arrow that you will click on, and it will move it to the register. Once you have what you want to return click close at the bottom.

![Returning Items](Images/POS/ReturningItems.png)
![Return Red Arrow](Images/POS/ReturnRedArrow.png)

- If you had their customer name in on the previous sale it will automatically pull over to the return. If not please make sure to put the customer name. You will also need to put in the notes the JB#.

![Refunding](Images/POS/Refunding.png)

- Once all the correct information is entered you can click on the refund options.
- Most likely the refund option is going to be cash. So click on the cash box if not already selected and then close, and you will be able to complete the transaction.

![Refund Options](Images/POS/RefundOptions.png)
![Complete Button](Images/POS/CompleteButton.png)

<span style="color: red;">**You will not be able to do a CASH refund without enough cash sales for that day. If you do not have enough cash sales for the day let Management know and they will get the refund a different way.**

## 4 Adding Items into POS
