package com.shuman.mapper;

import com.shuman.data.Contact;
import com.shuman.model.ContactModel;

import java.util.ArrayList;
import java.util.List;

public class ContactModelMapper {


    public static void mergeModel(final ContactModel model, Contact contact) {
        contact.setName(model.getName());
        contact.setEmail(model.getEmail());
        contact.setTel(model.getTel());
    }

    public static ContactModel toModel(final Contact contact) {
        ContactModel contactModel = new ContactModel();
        contactModel.setUuid(contact.getUuid());
        contactModel.setName(contact.getName());
        contactModel.setTel(contact.getTel());
        contactModel.setEmail(contact.getEmail());
        return contactModel;
    }

    public static List<ContactModel> toModel(final Iterable<Contact> contacts) {
        List<ContactModel> contactModels = new ArrayList<ContactModel>();
        for (Contact contact : contacts) {
            contactModels.add(toModel(contact));
        }
        return contactModels;
    }
}