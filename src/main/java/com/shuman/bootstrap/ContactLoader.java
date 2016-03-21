package com.shuman.bootstrap;

import com.shuman.data.Contact;
import com.shuman.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;


@Component
public class ContactLoader implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private ContactRepository contactService;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {

        Contact alba = new Contact();
        alba.setName("Джессика");
        alba.setUuid("1234");
        alba.setTel("+79234839277");
        alba.setEmail("test@gmail.com");
        contactService.save(alba);

        System.out.println("Saved " + alba.getName());

        Contact mila = new Contact();
        mila.setName("Мила");
        mila.setUuid("1235");
        mila.setTel("+78134435258");
        mila.setEmail("mila@gmail.com");
        contactService.save(mila);

        System.out.println("Saved " + mila.getName());

        Contact petr = new Contact();
        petr.setName("Петр");
        petr.setUuid("1236");
        petr.setTel("+79233450043");
        petr.setEmail("petr@gmail.com");
        contactService.save(petr);

        System.out.println("Saved " + petr.getName());

        Contact dima = new Contact();
        dima.setName("Дмитрий");
        dima.setUuid("1237");
        dima.setTel("+79268883445");
        dima.setEmail("dima@gmail.com");
        contactService.save(dima);

        System.out.println("Saved " + dima.getName());
    }
}
