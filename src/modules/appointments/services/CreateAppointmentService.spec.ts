import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create an appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppontiment = new CreateAppointmentService(
      fakeAppointmentsRepository
    );

    const appointment = await createAppontiment.execute({
      date: new Date(),
      provider_id: '123123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123');
  });

  it('should not be able to create two appointments with the same date', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppontiment = new CreateAppointmentService(
      fakeAppointmentsRepository
    );

    const appointmentDate = new Date();

    await createAppontiment.execute({
      date: appointmentDate,
      provider_id: '123123',
    });

    expect(
      createAppontiment.execute({
        date: appointmentDate,
        provider_id: '123123',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
