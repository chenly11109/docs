## XML Document Type
XML documents contain only markup and content
- WellFormed - Doctype
- start and close tag
```xml
<?xml version = "1.0"?>
<!DOCTYPE ORDERFILE [
<!ELEMENT ORDERFILE (CUSTOMER)*>
<!ELEMENT CUSTOMER (NAME, DATE, ORDERS)>
<!ELEMENT NAME (LAST-NAME, FIRST-NAME)>
<!ELEMENT LAST-NAME (#PCDATA)>
<!ELEMENT FIRST-NAME (#PCDATA)>
<!ELEMENT DATE (#PCDATA)>
<!ELEMENT ORDERS (ITEM)*>
<!ELEMENT ITEM (PRODUCT, NUMBER, (PRICE | CHARGEACCT | SAMPLE))>
<!ELEMENT PRODUCT (#PCDATA)>
<!ELEMENT NUMBER (#PCDATA)>
<!ELEMENT PRICE (#PCDATA)>
<!ELEMENT CHARGEACCT (#PCDATA)>
<!ELEMENT SAMPLE (#PCDATA)>
]>
<ORDERFILE>
    <CUSTOMER>
        <NAME>
            <LAST-NAME>Smith</LAST-NAME>
            <FIRST-NAME>Sam</FIRST-NAME>
        </NAME>
        <DATE>October 15, 2001</DATE>
        <ORDERS>
            <ITEM>
                <PRODUCT>Tomatoes</PRODUCT>
                <NUMBER>8</NUMBER>
                <PRICE>1.25</PRICE>
            </ITEM>
            <ITEM>
        <PRODUCT>Apples</PRODUCT>
                <NUMBER>12</NUMBER>
                <PRsICE>2.50</PRICE>
            </ITEM>
            <ITEM>
        <PRODUCT>Bananas</PRODUCT>
                <NUMBER>6</NUMBER>
                <PRICE>.50</PRICE>
            </ITEM>
        </ORDERS>
    </CUSTOMER>
    <CUSTOMER>
        <NAME>
            <LAST-NAME>Snead</LAST-NAME>
            <FIRST-NAME>Todd</FIRST-NAME>
        </NAME>
        <DATE>October 17, 2001</DATE>
        <ORDERS>
            <ITEM>
                <PRODUCT>Slicer/Dicer</PRODUCT>
                <NUMBER>1</NUMBER>
                <CHARGEACCT>1234-5678-3456-7890</CHARGEACCT>
            </ITEM>
        </ORDERS>
    </CUSTOMER>
</ORDERFILE>

```

## graph model
Within a graph, data is represented as `a network of individual facts or statements`. These statements are made up of two `nodes`, `the data points`—often referred to as the subject and object—and their `relationship`—often called the predicate. When combined they are known as a `triple`.